import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let elements = 1;

export default function getSubstanceAdministration(
  substanceAdministration,
  style?: styleInheritance,
) {
  const html = [];

  const { elts } = substanceAdministration;

  if (style) {
    if (style.elements) {
      elements = style.elements;
    }
  }

  html.push(
    `<details class="${['substanceAdministrationDetails', `dcol-${elements}`].join(' ')}" ${
      !style.parent ? 'open' : ''
    }><summary>Substance Administration</summary><div class="content">`,
  );

  if (elts) {
    html.push(attributeType(elts));
  }

  html.push(`</div></details>`);

  return html.join('');
}
