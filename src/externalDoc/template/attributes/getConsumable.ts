import { attributeType } from '../attributes';

export default function getConsumable(consumable) {
  const html = [];

  const { elts } = consumable;

  const manufacturedProduct = elts.find(e => e.name === 'manufacturedProduct');

  html.push('<div class="consumableDetails">');
  html.push('<div class="custField"><div class="label">Consumable:</div><div class="value">');

  if (manufacturedProduct) {
    const manufacturedMaterial = manufacturedProduct.elts.find(
      e => e.name === 'manufacturedMaterial',
    );

    html.push('<div class="inlineBlock">');

    if (manufacturedMaterial) {
      html.push(attributeType(manufacturedMaterial.elts));
    }

    html.push('</div>');
  }

  html.push('</div></div></div>');

  return html.join('');
}
