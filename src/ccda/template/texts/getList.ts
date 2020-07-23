import { textType } from '../texts';

function renderItem(item) {
  const html = [];

  html.push(`
      <li>${textType(item)}</li>
  `);

  return html.join('');
}

function orderedList(item) {
  const html = [];

  html.push(`
          <ol>
  `);

  if (Array.isArray(item)) {
    for (let i = 0; i < item.length; i += 1) {
      html.push(renderItem(item[i]));
    }
  } else {
    html.push(renderItem(item));
  }

  html.push(`
          </ol>
  `);

  return html.join('');
}

function unorderedList(item) {
  const html = [];

  html.push(`
          <ul>
  `);

  if (Array.isArray(item)) {
    for (let i = 0; i < item.length; i += 1) {
      html.push(renderItem(item[i]));
    }
  } else {
    html.push(renderItem(item));
  }

  html.push(`
          </ul>
  `);

  return html.join('');
}

export default function getList(list) {
  const html = [];

  const { item } = list;

  if (list._attributes && list._attributes.listType === 'ordered') {
    html.push(orderedList(item));
  } else {
    html.push(unorderedList(item));
  }

  return html.join('');
}
