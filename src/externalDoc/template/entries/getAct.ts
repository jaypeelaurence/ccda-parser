import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let elements = 1;

export default function getAct(act, style?: styleInheritance) {
  const html = [];

  if (style) {
    if (style.elements) {
      elements = style.elements;
    }
  }

  html.push(`
    <div class="${['actDetails', `dcol-${elements}`].join(' ')}">
      <h2>Act</h2>
      ${attributeType(act, { parent: 'inline' })}
    </div>
  `);

  return html.join('');
}
