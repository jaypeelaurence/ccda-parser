import { attributeType } from '../attributes';

export default function getConsumable(consumable){
  const html = [];

  const { manufacturedProduct: { manufacturedMaterial } } = consumable;

  html.push(`
    <div class="consumableDetails">
      <strong>Consumable</strong>: `);

  if (manufacturedMaterial) {
    html.push(attributeType(manufacturedMaterial))
  }

  html.push(`
    </div>
  `);

  return html.join('');
}
