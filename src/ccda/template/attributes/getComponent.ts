import { entryType } from '../entries';

export default function getComponent(component) {
  const html = [];

  html.push(`
    <div class="componentDetails">
  `);

  if(Array.isArray(component)){
    for (let i = 0; i < component.length; i += 1) {
      html.push(entryType(component[i]));
    }
  } else {
    html.push(entryType(component));
  }

  html.push(`
    </div>
  `);

  return html.join('');
}
