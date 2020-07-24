import { attributeType } from '../attributes';

export default function getSubstanceAdministration(substanceAdministration) {
  const html = [];

  html.push(`
    <div class="substanceAdministrationDetails">
      ${attributeType(substanceAdministration)}
    </div>
  `);

  return html.join('');
}
