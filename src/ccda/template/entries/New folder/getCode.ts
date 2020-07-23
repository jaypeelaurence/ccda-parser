// import { render } from 'mustache';

export default function getCode(code){
  const html = [];

  // if(code._attributes && code._attributes.displayName){ 
  //   html.push(render(`
  //     <div>
  //       <h3 style="margin:1em 0">{{_attributes.displayName}}</h3>
  //     </div>
  //   `, code))
  // }

  return html.join('');
}