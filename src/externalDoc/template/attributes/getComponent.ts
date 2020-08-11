import { entryType } from '../entries';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function getComponent(component) {
  const html = [];

  html.push('<div class="componentDetails">');

  for (let i = 0; i < component.length; i += 1) {
    if (component[i]) {
      component[i].elts.forEach(e => {
        html.push(entryType(e, { elements: component.length, parent: true }));
      });
    }
  }

  html.push('</div>');

  return html.join('');
}
