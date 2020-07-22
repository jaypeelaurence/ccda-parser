import { entryType } from '../entries';

export default function getEntry(entry) {
  const html = [];

  if (Array.isArray(entry)) {
    for (let index = 0; index < entry.length; index += 1) {
      html.push(entryType(entry[index]));
    }
  } else {
    html.push(entryType(entry));
  }

  return html.join(entry);
}
