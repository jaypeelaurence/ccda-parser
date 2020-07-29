import { render } from 'mustache';
import { entryType } from './entries';
import { textType } from './texts';

export default function generateSection(section) {
  const html = [];
  let state = false;

  let title = section.find(elt => elt.name === 'title');
  title = title.elts.find(elt => elt.type === 'text');
  const text = section.find(elt => elt.name === 'text');
  const entry = section.find(elt => elt.name === 'entry');

  html.push('<div class="sectionDetails content">');

  if (title) {
    html.push(render('<h2 class="title">{{text}}</h2>', title));
  }

  if (text) {
    const textElts = ['caption', 'content', 'list', 'paragraph', 'table'];
    const texts = text.elts.find(elt => textElts.includes(elt.name));

    if (texts) {
      state = true;

      html.push(textType(texts));
    }
  }

  if (entry) {
    const entryElts = ['act', 'encounter', 'observation', 'observation', 'procedure', 'substanceAdministration'];
    const entries = entry.elts.find(elt => entryElts.includes(elt.name));

    if (entries) {
      state = true;

      html.push(entryType(entries));
    }
  }

  if (!state) {
    html.push('<p class="custEmpty">No Information</p>');
  }

  html.push('</div>');

  return html.join('');
}
