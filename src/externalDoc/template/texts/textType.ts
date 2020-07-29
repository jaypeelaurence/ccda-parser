import { getList, getParagraph, getTable, getContent, getCaption } from '../texts';

export default function textType(type) {
  const html = [];

  const { _text, content, table, list, paragraph, caption } = type;

  if (_text) {
    if (Array.isArray(_text)) {
      for (let i = 0; i < _text.length; i += 1) {
        html.push(`${_text[i]} <br/>`);
      }
    } else {
      html.push(_text);
    }
  }

  if (caption) {
    html.push(getCaption(caption));
  }

  if (content) {
    html.push(getContent(content));
  }

  if (list) {
    html.push(getList(list));
  }

  if (table) {
    html.push(getTable(table));
  }

  if (paragraph) {
    html.push(getParagraph(paragraph));
  }

  return html.join('');
}
