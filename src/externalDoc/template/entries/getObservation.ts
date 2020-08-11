import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let elements = 1;

export default function getObservation(observation, style?: styleInheritance) {
  const html = [];

  const { elts } = observation;

  if (style) {
    if (style.elements) {
      elements = style.elements;
    }
  }

  html.push(
    `<details class="${['observationDetails', `dcol-${elements}`].join(' ')}" ${
      !style.parent ? 'open' : ''
    }><summary>Observation</summary><div class="content">`,
  );

  if (elts) {
    html.push(attributeType(elts));
  }

  html.push(`</div></details>`);

  return html.join('');
}
