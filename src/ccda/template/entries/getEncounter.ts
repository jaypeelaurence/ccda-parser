import { attributeType } from '../attributes';

export default function getEncounter(encounter) {
  const html = [];

  html.push(`
    <div class="encounterDetails">
      ${attributeType(encounter)}
    </div>
  `);

  return html.join('');
}
