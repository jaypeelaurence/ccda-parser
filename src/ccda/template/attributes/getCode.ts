import { render } from 'mustache';
import { attributeType } from '../attributes';

export default function getCode(code){
  const html = [];

  html.push(`
    <div class="codeDetails">
      <strong>code</strong>: `);

  const { _attributes, translation } = code;

  if (_attributes) {
    html.push(`${render(`{{displayName}} `, _attributes)} `)
  }

  if (translation) {
    html.push(`${render(`<i>{{_attributes.displayName}} </i>`, translation)} `)
  }

  html.push(`<i>${attributeType(code)}</i> `);

  html.push(`
    </div>
  `);

  return html.join('');
}