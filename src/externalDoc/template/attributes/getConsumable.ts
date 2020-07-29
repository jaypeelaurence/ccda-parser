import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let parent = '';
let children = '';

export default function getConsumable(consumable, style?: styleInheritance) {
  const html = [];

  if (style) {
    if (style.parent) {
      parent = style.parent;
    }

    if (style.children) {
      children = style.children;
    }
  }

  const {
    manufacturedProduct: { manufacturedMaterial },
  } = consumable;

  html.push(`
    <div class="${['statusCodeDetails', parent].join(' ')}">
      <div class="${['label', children].join(' ')}">
        Consumable:
      </div>
  `);

  html.push(`
      <div class="value">
  `);

  if (manufacturedMaterial) {
    html.push(attributeType(manufacturedMaterial, { ...style }));
  }

  html.push(`
      </div>
    </div>
  `);

  return html.join('');
}
