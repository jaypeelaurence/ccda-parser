import { textType } from '../texts';

function renderParagraph(paragraph) {
  return textType(paragraph);
}

export default function getParagraph(paragraph) {
  const html = [];

  const { elts } = paragraph;

  if (elts) {
    for (let i = 0; i < elts.length; i += 1) {
      html.push(`<p>${renderParagraph(elts[i])}</p>`);
    }
  }

  return html.join('');
}
