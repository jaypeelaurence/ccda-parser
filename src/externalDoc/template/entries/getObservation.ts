import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let elements = 1;

export default function getObservation(observation, style?: styleInheritance) {
  const html = [];

  if (style) {
    if (style.elements) {
      elements = style.elements;
    }
  }

  html.push(`
    <div class="${['observationDetails', `dcol-${elements}`].join(' ')}">
      <h2>Observation</h2>
      ${attributeType(observation, { parent: 'inline' })}
    </div>
  `);

  return html.join('');
}
