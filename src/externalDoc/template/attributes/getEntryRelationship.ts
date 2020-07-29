import { entryType } from '../entries';
import { styleInheritance } from '../../template';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function getEntryRelationship(entryRelationship, style?: styleInheritance) {
  const html = [];

  html.push(`
    <div class="entryRelationShipDetails inline">
  `);

  if (Array.isArray(entryRelationship)) {
    for (let i = 0; i < entryRelationship.length; i += 1) {
      html.push(entryType(entryRelationship[i], { elements: entryRelationship.length }));
    }
  } else {
    html.push(entryType(entryRelationship, { elements: 1 }));
  }

  html.push(`
    </div>
  `);

  return html.join('');
}
