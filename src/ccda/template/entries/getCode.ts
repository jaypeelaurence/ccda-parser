import { render } from 'mustache';

export default function getCode(code){
  const html = [];

  if(code.$ && code.$.displayName){    
    html.push(render(`
      <div>
        <h3 style="margin:1em 0">{{$.displayName}}</h3>
      </div>
    `, code))
  }

  return html.join('');
}