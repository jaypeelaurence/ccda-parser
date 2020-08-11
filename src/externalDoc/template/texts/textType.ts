import { getList, getParagraph, getTable, getContent, getCaption } from '../texts';

export default function textType(text) {
  const html = [];

  const { name, elts, type } = text;

  if (type === 'text') {
    html.push(`<p>${text.text}</p>`);
  }

  if (name === 'caption') {
    html.push(getCaption(elts));
  }

  if (name === 'content') {
    html.push(getContent(text));
  }

  if (name === 'list') {
    html.push(getList(text));
  }

  if (name === 'table') {
    html.push(getTable(text));
  }

  if (name === 'paragraph') {
    html.push(getParagraph(text));
  }

  return html.join('');
}
