import { entryType } from '../entries';

export default function getEntryRelationship(entryRelationship) {
  const html = [];

  html.push(`
    <div class="entryRelationShipDetails">
  `);

  if(Array.isArray(entryRelationship)){
    for (let i = 0; i < entryRelationship.length; i += 1) {
      html.push(entryType(entryRelationship[i]));
    }
  } else {
    html.push(entryType(entryRelationship));
  }

  html.push(`
    </div>
  `);

  return html.join('');
}
