import { attributeType } from '../attributes';

export default function getProcedure(procedure) {
  const html = [];

  html.push(`
    <div class="procedureDetails">
      ${attributeType(procedure)}
    </div>
  `);

  return html.join('');
}
