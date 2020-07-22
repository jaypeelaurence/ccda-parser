import { entryType } from '../entries';

export default function getEntryRelationship(entryRelationship) {
  const html = [];

  html.push(entryType(entryRelationship));

  return html.join('');
}
