import { attributeType } from '../attributes';

export default function getOrganizer(organizer) {
  const html = [];

  html.push(`
    <div class="organizerDetails">
      ${attributeType(organizer)}
    </div>
  `);

  return html.join('');
}
