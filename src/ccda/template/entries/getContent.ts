import { entryType } from '../entries';

function renderSpan(content) {
  const html = [];

  if (typeof content !== 'string') {
    html.push(`
        <span>
    `);

    if (content) {
      html.push(entryType(content));
    }

    html.push(`
        </span>
    `);
  } else {

    html.push(`
      <span>${content}</span>
    `);
  }

  return html.join('');
}

function renderContent(content) {
  const html = [];

  if (Array.isArray(content)) {
    for (let i = 0; i < content.length; i += 1) {
      html.push(renderSpan(content[i]));
    }
  } else {
    html.push(renderSpan(content));
  }

  return html.join('');
}

export default function getContent(content) {
  const html = [];

  html.push(renderContent(content));

  return html.join('');
}
