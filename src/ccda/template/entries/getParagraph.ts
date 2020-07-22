import { entryType } from '../entries';

function renderParagraph(paragraph) {
  const html = [];

  if (typeof paragraph !== 'string') {
    html.push(entryType(paragraph));
  } else {
    html.push(`${paragraph}`);
  }

  return html.join('');
}

export default function getParagraph(paragraph) {
  const html = [];

  html.push(`<p>`);

  html.push(renderParagraph(paragraph));

  html.push(`</p>`);

  return html.join('');
}
