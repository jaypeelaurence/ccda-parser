import { textType } from '../texts';

function renderParagraph(paragraph) {
  const html = [];

  html.push(textType(paragraph));

  return html.join('');
}

export default function getParagraph(paragraph) {
  const html = [];

  html.push(`<p>`);

  html.push(renderParagraph(paragraph));

  html.push(`</p>`);

  return html.join('');
}
