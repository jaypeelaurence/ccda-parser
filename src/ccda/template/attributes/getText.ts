import { render } from 'mustache';

export default function getText(text){
  const html = [];

  html.push(`
    <div class="refrerenceDetails">
      <strong>reference</strong>: `);

  const { reference, _text } = text;

  if (reference && reference._attributes) {
    html.push(render(`{{value}} `, reference._attributes))
  }

  if (_text) {
    html.push(_text)
  }

  html.push(`
    </div>
  `);

  return html.join('');
}
