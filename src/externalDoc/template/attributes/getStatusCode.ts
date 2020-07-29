import { render } from 'mustache';
import { styleInheritance } from '../../template';

let parent = '';
let children = '';

export default function getStatusCode(statusCode, style?: styleInheritance) {
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
    <div class="${['statusCodeDetails', parent].join(' ')}">
      <div class="${['label', children].join(' ')}">
        Status:
      </div>
  `);

  html.push(`
      <div class="value">
  `);

  const { _attributes } = statusCode;

  if (_attributes) {
    html.push(render(`{{code}} `, _attributes));
  }

  html.push(`
      </div>
    </div>
  `);

  return html.join('');
}
