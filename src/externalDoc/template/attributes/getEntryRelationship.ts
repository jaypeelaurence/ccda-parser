import { entryType } from '../entries';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function getEntryRelationship(entryRelationship) {
  const html = [];

  html.push('<div class="entryRelationShipDetails">');

  for (let i = 0; i < entryRelationship.length; i += 1) {
    if (entryRelationship[i]) {
      entryRelationship[i].elts.forEach(e => {
        html.push(entryType(e, { elements: entryRelationship.length, parent: true }));
      });
    }
  }

  html.push('</div>');

  return html.join('');
}
