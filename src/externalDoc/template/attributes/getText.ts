import { render } from 'mustache';
import { styleInheritance } from '../../template';

let parent = '';
let children = '';

export default function getText(text, style?: styleInheritance) {
  const html = [];

  if (style) {
    if (style.parent) {
      parent = style.parent;
    }

    if (style.children) {
      children = style.children;
    }
  }

  html.push(`
    <div class="${['refrerenceDetail', parent].join('')}">
      <div class="${['label', children].join(' ')}">
        Reference:
      </div>
  `);

  const { reference, _text } = text;

  html.push(`
      <div class="value">
  `);

  if (reference && reference._attributes) {
    html.push(render(`{{value}} `, reference._attributes));
  }

  if (_text) {
    html.push(_text);
  }

  html.push(`
      </div>
    </div>
  `);

  return html.join('');
}
