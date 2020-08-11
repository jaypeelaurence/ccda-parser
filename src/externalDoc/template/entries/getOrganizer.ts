import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let elements = 1;

export default function getOrganizer(organizer, style?: styleInheritance) {
  const html = [];

  const { elts } = organizer;

  if (style) {
    if (style.elements) {
      elements = style.elements;
    }
  }

  html.push(
    `<details class="${['organizerDetails', `dcol-${elements}`].join(' ')}" ${
      !style.parent ? 'open' : ''
    }><summary>Organizer</summary><div class="content">`,
  );

  if (elts) {
    html.push(attributeType(elts));
  }

  html.push(`</div></details>`);

  return html.join('');
}
