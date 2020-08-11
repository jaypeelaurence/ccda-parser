import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let elements = 1;

export default function getEncounter(encounter, style?: styleInheritance) {
  const html = [];

  const { elts } = encounter;

  if (style) {
    if (style.elements) {
      elements = style.elements;
    }
  }

  html.push(
    `<details class="${['encounterDetails', `dcol-${elements}`].join(' ')}" ${
      !style.parent ? 'open' : ''
    }><summary>Encounter</summary><div class="content">`,
  );

  if (elts) {
    html.push(attributeType(elts));
  }

  html.push(`</div></details>`);

  return html.join('');
}
