// import { entryType } from '../entries';

export default function getEntryRelationship(entryRelationship) {
  const html = [];

//   if (Array.isArray(entryRelationship)) {
//     for (let i = 0; i < entryRelationship.length; i += 1) {
//       html.push(entryType(entryRelationship[i]));
//     }
//   } else {
//     html.push(entryType(entryRelationship));
//   }

  return html.join('');
}
