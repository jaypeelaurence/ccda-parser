import { render } from 'mustache';

export default function getText(text) {
  const html = [];

  const { elts } = text;

  const reference = elts.find(e => e.name === 'reference');

  html.push('<div class="refrerenceDetails">');
  html.push('<div class="custField"><div class="label">Reference:</div><div class="value">');

  if (reference && reference.atts) {
    html.push(render(`{{value}} `, reference.atts));
  }

  html.push('</div></div></div>');

  return html.join('');
}
