import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let elements = 1;

export default function getProcedure(procedure, style?: styleInheritance) {
  const html = [];

  if (style) {
    if (style.elements) {
      elements = style.elements;
    }
  }

  html.push(`
    <div class="${['procedureDetails', `dcol-${elements}`].join(' ')}">
      <h2>Procedure</h2>
      ${attributeType(procedure)}
    </div>
  `);

  return html.join('');
}
