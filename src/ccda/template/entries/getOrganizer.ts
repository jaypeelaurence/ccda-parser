import { entryType } from '../entries';

export default function getOrganizer(organizer) {
  const html = [];

  html.push(`
    <div class="organizerDetails">
    </div>
  `);

  return html.join('');
}
