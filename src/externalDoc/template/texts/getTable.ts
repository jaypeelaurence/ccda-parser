import { textType } from '../texts';

function renderCell(cell) {
  const html = [];

  for (let i = 0; i < cell.length; i += 1) {
    return textType(cell[i]);
  }

  return html.join('');
}

function renderTd(td) {
  const html = [];

  for (let i = 0; i < td.length; i += 1) {
    const { elts } = td[i];

    if (elts) {
      html.push('<td>');
      html.push(renderCell(elts));
      html.push('</td>');
    }
  }

  return html.join('');
}

function renderTh(th) {
  const html = [];

  for (let i = 0; i < th.length; i += 1) {
    const { elts } = th[i];

    if (elts) {
      html.push('<th>');
      html.push(renderCell(elts));
      html.push('</th>');
    }
  }

  return html.join('');
}

function renderTr(tr) {
  const html = [];

  const th = tr.elts.filter(e => e.name === 'th');
  const td = tr.elts.filter(e => e.name === 'td');

  html.push('<tr>');

  if (th) {
    html.push(renderTh(th));
  }

  if (td) {
    html.push(renderTd(td));
  }

  html.push('</tr>');

  return html.join('');
}

function renderTbody(tbody) {
  const html = [];

  const tr = tbody.elts.find(e => e.name === 'tr');

  html.push(`<tbody>${renderTr(tr)}</tbody>`);

  return html.join('');
}

function renderThead(thead) {
  const html = [];

  const tr = thead.elts.find(e => e.name === 'tr');

  html.push(`<thead>${renderTr(tr)}</thead>`);

  return html.join('');
}

export default function getTable(table) {
  const html = [];

  const thead = table.elts.find(e => e.name === 'thead');
  const tbody = table.elts.find(e => e.name === 'tbody');

  html.push('<div class="tableWrapper"><table>');

  html.push(renderThead(thead));
  html.push(renderTbody(tbody));

  html.push('</table></div>');

  return html.join('');
}
