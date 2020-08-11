import { textType } from '../texts';

function renderContent(content) {
  return textType(content);
}

export default function getContent(content) {
  const html = [];

  const { elts } = content;

  if (elts) {
    for (let i = 0; i < elts.length; i += 1) {
      html.push(renderContent(elts[i]));
    }
  }

  return html.join('');
}
