import { entryType } from '../entries';
import { styleInheritance } from '../../template';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function getComponent(component, style?: styleInheritance) {
  const html = [];

  html.push(`
    <div class="componentDetails inline">
  `);

  if (Array.isArray(component)) {
    for (let i = 0; i < component.length; i += 1) {
      html.push(entryType(component[i], { elements: component.length }));
    }
  } else {
    html.push(entryType(component, { elements: 1 }));
  }

  html.push(`
    </div>
  `);

  return html.join('');
}
