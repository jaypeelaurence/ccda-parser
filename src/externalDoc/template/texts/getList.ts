import { textType } from '../texts';

function renderItem(item) {
  return `${textType(item)}`;
}

function orderedList(item) {
  const html = [];

  const items = item.find(e => e.name === 'item');

  html.push('<div class="ordered">');

  for (let i = 0; i < items.elts.length; i += 1) {
    html.push(renderItem(items.elts[i]));
  }

  html.push('</div>');

  return html.join('');
}

function unorderedList(item) {
  const html = [];

  const items = item.find(e => e.name === 'item');

  html.push('<div class="unordered">');

  for (let i = 0; i < items.elts.length; i += 1) {
    html.push(renderItem(items.elts[i]));
  }

  html.push('</div>');

  return html.join('');
}

export default function getList(list) {
  const html = [];

  const { atts, elts } = list;

  if (elts) {
    if (atts && atts.listType === 'ordered') {
      html.push(orderedList(elts));
    } else {
      html.push(unorderedList(elts));
    }
  }

  return html.join('');
}
