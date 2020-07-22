import { entryType } from '../entries';

function renderCell(cell) {
  const html = [];

  if (typeof cell !== 'string') {
    html.push(entryType(cell));
  } else {
    html.push(`${cell}`);
  }

  return html.join('');
}

function renderTd(td) {
  const html = [];

  html.push(`
    <td>
  `);

  if (Array.isArray(td)) {
    for (let index = 0; index < td.length; index += 1) {
      html.push(renderCell(td[index]));
    }
  } else {
    html.push(renderCell(td));
  }

  html.push(`
    </td>
  `);

  return html.join('');
}

function renderTh(th) {
  const html = [];

  html.push(`
    <th>
  `);

  if (Array.isArray(th)) {
    for (let index = 0; index < th.length; index += 1) {
      html.push(renderCell(th[index]));
    }
  } else {
    html.push(renderCell(th));
  }

  html.push(`
    </th>
  `);

  return html.join('');
}

function renderTr(tr) {
  const html = [];

  html.push(`
    <tr>
  `);

  const { td, th } = tr; 

  if (td) {
    if (Array.isArray(td)) {
      for (let index = 0; index < td.length; index += 1) {
        html.push(renderTd(td[index]));
      }
    } else {
      html.push(renderTd(td));
    }
  }

  if (th) {
    const { th } = tr;

    if (Array.isArray(th)) {
      for (let index = 0; index < th.length; index += 1) {
        html.push(renderTd(th[index]));
      }
    } else {
      html.push(renderTd(th));
    }
  }

  html.push(`
    </tr>
  `);

  return html.join('');
}

function renderTbody(tbody) {
  const html = [];

  if (tbody) {
    const { tr } = tbody;

    html.push(`
      <tbody>
    `);

    if (Array.isArray(tr)) {
      for (let index = 0; index < tr.length; index += 1) {
        html.push(renderTr(tr[index]));
      }
    } else {
      html.push(renderTr(tr));
    }

    html.push(`
      </tbody>
    `);
  }

  return html.join('');
}

function renderThead(thead) {
  const html = [];

  if (thead) {
    const {
      tr: { th },
    } = thead;

    html.push(`
      <thead>
        <tr>
    `);

    for (let i = 0; i < th.length; i += 1) {
      html.push(`
        <th>
      `);

      html.push(renderCell(th[i]));

      html.push(`
        </th>
      `);
    }

    html.push(`
        </tr>
      </thead>
    `);
  }

  return html.join('');
}

export default function getTable(table) {
  const html = [];

  const { thead, tbody } = table;

  html.push(`
    <table>
  `);

  html.push(renderThead(thead));

  html.push(renderTbody(tbody));

  html.push(`
    </table>
  `);

  return html.join('');
}
