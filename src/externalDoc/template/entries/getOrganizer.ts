import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let elements = 1;

export default function getOrganizer(organizer, style?: styleInheritance) {
  const html = [];

  if (style) {
    if (style.elements) {
      elements = style.elements;
    }
  }

  html.push(`
    <div class="${['organizerDetails', `dcol-${elements}`].join(' ')}">
      <h2>Organizer</h2>
      ${attributeType(organizer)}
    </div>
  `);

  return html.join('');
}
