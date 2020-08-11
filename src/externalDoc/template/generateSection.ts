import { entryType } from './entries';
import { textType } from './texts';
import { formatTitle } from '../methods/formatTitle';

export default function generateSection(section) {
  const html = [];
  let state = false;

  let title = section.find(e => e.name === 'title');
  title = title.elts.find(e => e.type === 'text');
  const text = section.filter(e => e.name === 'text');
  const entry = section.filter(e => e.name === 'entry');

  html.push('<details class="sectionDetails" open>');

  if (title) {
    html.push(`<summary class="title">${formatTitle(title.text)}</summary>`);
  }

  html.push('<div class="content">');

  const textElts = ['caption', 'content', 'list', 'paragraph', 'table'];
  const entryElts = [
    'act',
    'encounter',
    'observation',
    'observation',
    'procedure',
    'substanceAdministration',
  ];

  if (text.length) {
    for (let i = 0; i < text.length; i += 1) {
      const texts = text[i].elts.filter(e => textElts.includes(e.name));

      if (texts.length) {
        state = true;

        texts.forEach(e => {
          html.push(textType(e));
        });
      }
    }
  }

  if (entry.length) {
    html.push('<div class="entryDetails">');

    for (let i = 0; i < entry.length; i += 1) {
      const entries = entry[i].elts.filter(e => entryElts.includes(e.name));

      if (entries.length) {
        state = true;

        entries.forEach(e => {
          html.push(entryType(e, { elements: entry.length }));
        });
      }
    }

    html.push('</div>');
  }

  if (!state) {
    html.push('<div class="custEmpty">no information</div>');
  }

  html.push('</div>');
  html.push('</details>');

  return html.join('');
}
