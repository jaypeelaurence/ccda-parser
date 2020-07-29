import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let elements = 1;

export default function getEncounter(encounter, style?: styleInheritance) {
  const html = [];

  if (style) {
    if (style.elements) {
      elements = style.elements;
    }
  }

  html.push(`
    <div class="${['encounterDetails', `dcol-${elements}`].join(' ')}">
      <h2>Encounter</h2>
      ${attributeType(encounter, { parent: 'inline', children: 'nonLabel' })}
    </div>
  `);

  return html.join('');
}
