import { render } from 'mustache';
import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let parent = '';
let children = '';

export default function getCode(code, style?: styleInheritance) {
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
    <div class="${['codeDetails', parent].join(' ')}">
      <div class="${['label', children].join(' ')}">
        Code:
      </div>
  `);

  html.push(`
      <div class="value">
  `);

  const { _attributes, translation } = code;

  if (_attributes) {
    html.push(`${render(`{{codeSystemName}} - {{displayName}} `, _attributes)} `);
  }

  if (translation) {
    if (Array.isArray(translation)) {
      for (let i = 0; i < translation.length; i += 1) {
        html.push(`${render(`<i>{{_attributes.displayName}} </i>`, translation[i])} `);
      }
    } else {
      html.push(`${render(`<i>{{_attributes.displayName}} </i>`, translation)} `);
    }
  }

  html.push(`<i>${attributeType(code)}</i> `);

  html.push(`
      </div>
  `);

  html.push(`
    </div>
  `);

  return html.join('');
}
