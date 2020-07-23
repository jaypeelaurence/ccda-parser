// import { entryType } from '../entries';

export default function getComponent(component) {
  const html = [];

  // if(Array.isArray(component)){
  //   for (let i = 0; i < component.length; i += 1) {
  //     html.push(component[i]);
  //   }
  // } else {
  //   html.push(entryType(component));
  // }

  return html.join('');
}
