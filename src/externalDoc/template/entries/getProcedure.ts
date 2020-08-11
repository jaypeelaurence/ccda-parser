import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let elements = 1;

export default function getProcedure(procedure, style?: styleInheritance) {
  const html = [];

  const { elts } = procedure;

  if (style) {
    if (style.elements) {
      elements = style.elements;
    }
  }

  html.push(
    `<details class="${['procedureDetails', `dcol-${elements}`].join(' ')}" ${
      !style.parent ? 'open' : ''
    }><summary>Procedure</summary><div class="content">`,
  );

  if (elts) {
    html.push(attributeType(elts));
  }

  html.push(`</div></details>`);

  return html.join('');
}
