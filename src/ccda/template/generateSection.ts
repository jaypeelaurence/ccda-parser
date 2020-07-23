import { entryType } from './entries';
import { textType } from './texts';

export default function generateSection(section) {
  const html = [];

  const { title, text, entry } = section;

  html.push(`
    <div class="sectionDetails">
  `);

  if (title) {
    html.push(`
      <h2 style="margin:1em 0">${title._text}</h2>
    `);
  }

  if (text) {
    if (Array.isArray(text)) {
      html.push(`
        <div class="textDetails">
      `);

      for (let i = 0; i < text.length; i += 1) {
        html.push(textType(text[i]));
      }

      html.push(`
        </div>
      `);
    } else {
      html.push(`
        <div class="textDetails">
          ${textType(text)}
        </div>
      `);
    }
  }

  if (entry) {
    if (Array.isArray(entry)) {
      html.push(`
        <div class="entryDetails">
      `);

      for (let i = 0; i < entry.length; i += 1) {
        html.push(entryType(entry[i]));
      }

      html.push(`
        </div>
      `);
    } else {
      html.push(`
        <div class="entryDetails">
          ${entryType(entry)}
        </div>
      `);
    }
  }

  html.push(`
    </div>
  `);

  return html.join('');
}