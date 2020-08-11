import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let elements = 1;

export default function getAct(act, style?: styleInheritance) {
  const html = [];

  const { elts } = act;

  if (style) {
    if (style.elements) {
      elements = style.elements;
    }
  }

  html.push(
    `<details class="${['actDetails', `dcol-${elements}`].join(' ')}" ${
      !style.parent ? 'open' : ''
    }><summary>Act</summary><div class="content">`,
  );

  if (elts) {
    html.push(attributeType(elts));
  }

  html.push(`</div></details>`);

  return html.join('');
}
