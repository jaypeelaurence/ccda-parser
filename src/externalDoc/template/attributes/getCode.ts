import { render } from 'mustache';

export default function getCode(code) {
  const html = [];

  const { atts, elts } = code;

  html.push('<div class="codeDetails">');
  html.push('<div class="custField"><div class="label">Code:</div><div class="value">');

  if (atts) {
    html.push(`${render(`{{codeSystemName}} - {{displayName}} `, atts)} `);
  }

  if (elts) {
    const translation = elts.filter(e => e.name === 'translation');

    translation.forEach(e => {
      if (e.atts) {
        html.push(`${render(`<i>{{displayName}} </i>`, e.atts)} `);
      }
    });
  }

  html.push('</div></div></div>');

  return html.join('');
}
