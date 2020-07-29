import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let elements = 1;

export default function getSubstanceAdministration(
  substanceAdministration,
  style?: styleInheritance,
) {
  const html = [];

  if (style) {
    if (style.elements) {
      elements = style.elements;
    }
  }

  html.push(`
    <div class="${['substanceAdministrationDetails', `dcol-${elements}`].join(' ')}">
      <h2>Substance Administration</h2>
      ${attributeType(substanceAdministration, { parent: 'inline', children: 'nonLabel' })}
    </div>
  `);

  return html.join('');
}
