import { render } from 'mustache';

export default function getStatusCode(statusCode) {
  const html = [];

  const { atts } = statusCode;

  html.push('<div class="statusCodeDetails">');
  html.push('<div class="custField"><div class="label">Status:</div><div class="value">');

  if (atts) {
    html.push(render(`{{code}} `, atts));
  }

  html.push('</div></div></div>');

  return html.join('');
}
