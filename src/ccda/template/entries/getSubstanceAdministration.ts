import { entryType } from '../entries';

export default function getSubstanceAdministration(substanceAdministration) {
  const html = [];

  html.push(`
    <div class="substanceAdministrationDetails">
    </div>
  `);

  return html.join('');
}
