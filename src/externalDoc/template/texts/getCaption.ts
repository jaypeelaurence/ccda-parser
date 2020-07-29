import { textType } from '../texts';

function renderCaption(caption) {
  const html = [];

  html.push(`
      <span>${textType(caption)}</span>
  `);

  return html.join('');
}

export default function getCaption(caption) {
  const html = [];

  html.join(renderCaption(caption));

  return html.join('');
}
