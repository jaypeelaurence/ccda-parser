import { render } from 'mustache';

export default function getStatusCode(statusCode){
  const html = [];

  if(statusCode.$ && statusCode.$.code){    
    html.push(render(`
      <div>
        <strong>Status:</strong><div class="ml">{{$.code}}</div>
      </div>
    `, statusCode))
  }

  return html.join('');
}