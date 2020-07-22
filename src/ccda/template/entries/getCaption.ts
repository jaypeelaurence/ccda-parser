import { entryType } from '../entries';

function renderCaption(caption) {
  const html = [];

  if (typeof caption !== 'string') {
    html.push(`
        <span>
    `);

    html.push(entryType(caption));

    html.push(`
        </span>
    `);
  } else {
    html.push(`
        <span>${caption}</span>
    `);
  }

  return html.join('');
}

export default function getCaption(caption) {
  const html = [];

  html.join(renderCaption(caption));

  return html.join('');
}
