import { render } from 'mustache';

export default function getStatusCode(statusCode){
  const html = [];

  html.push(`
    <div class="statusCodeDetails">
      <strong>status</strong>: `);

  const { _attributes } = statusCode;

  if (_attributes) {
    html.push(render(`{{code}} `, _attributes))
  }

  html.push(`
    </div>
  `);

  return html.join('');
}
