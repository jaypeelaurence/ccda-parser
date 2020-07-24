import { render } from 'mustache';

export default function getDoseQuantity(doseQuantity){
  const html = [];

  html.push(`
    <div class="doseQuantityDetails">
      <strong>Dose</strong>: `);

  const { _attributes } = doseQuantity;

  html.push(render(`{{value}} {{unit}}`, _attributes));

  html.push(`
    </div>
  `);

  return html.join('');
}