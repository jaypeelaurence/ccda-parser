import { attributeType } from '../attributes';

export default function getObservation(observation) {
  const html = [];

  html.push(`
    <div class="observationDetails">
      ${attributeType(observation)}
    </div>
  `);

  return html.join('');
}
