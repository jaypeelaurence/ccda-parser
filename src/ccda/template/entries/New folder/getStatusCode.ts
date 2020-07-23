import { render } from 'mustache';

export default function getStatusCode(statusCode){
  const html = [];

  // if(statusCode._attributes && statusCode._attributes.code){    
  //   html.push(render(`
  //     <div>
  //       <strong>Status:</strong><div class="ml">{{_attributes.code}}</div>
  //     </div>
  //   `, statusCode))
  // }

  return html.join('');
}
