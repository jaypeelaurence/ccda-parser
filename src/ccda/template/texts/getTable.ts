import { textType } from '../texts';

function renderCell(cell) {
  const html = [];

  html.push(textType(cell))

  return html.join('');
}

function renderTd(td) {
  const html = [];

  html.push(`
    <td style="text-align: left;">
  `);

  if (Array.isArray(td)) {
    for (let i = 0; i < td.length; i += 1) {
      html.push(renderCell(td[i]));
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
    <th style="text-align: left;">
  `);

  if (Array.isArray(th)) {
    for (let i = 0; i < th.length; i += 1) {
      html.push(renderCell(th[i]));
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

  if (Array.isArray(tr)) {
    html.push(`
      <tr>
    `);

    for (let i = 0; i < tr.length; i += 1) {
      html.push(renderTh(tr[i]));
    }

    html.push(`
      </tr> 
    `);
  } else {
    if(tr) {
      const { td, th, _text } = tr;

      if (_text) {
        html.push(`
            <tr>
              <td>
                ${renderCell(_text)}
              </td>
            </tr>
        `);
      }

      if (th) {
        html.push(`
            <tr>
        `);

        if (Array.isArray(th)) {
          for (let i = 0; i < th.length; i += 1) {
            html.push(renderTh(th[i]));
          }
        } else {
          html.push(renderTh(th));
        }

        html.push(`
          </tr> 
        `);
      }

      if (td) {
        html.push(`
            <tr>
        `);

        if (Array.isArray(td)) {
          for (let i = 0; i < td.length; i += 1) {
            html.push(renderTd(td[i]));
          }
        } else {
          html.push(renderTd(td));
        }

        html.push(`
          </tr> 
        `);
      }
    }
  }

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
      for (let i = 0; i < tr.length; i += 1) {
        html.push(renderTr(tr[i]));
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
    `);

    html.push(renderTr(th));

    html.push(`
      </thead>
    `);
  }

  return html.join('');
}

export default function getTable(table) {
  const html = [];

  const { thead, tbody } = table;

  html.push(`
    <table style="width: 100%; border-collapse: collapse;">
  `);

  html.push(renderThead(thead));

  html.push(renderTbody(tbody));

  html.push(`
    </table>
  `);

  return html.join('');
}
