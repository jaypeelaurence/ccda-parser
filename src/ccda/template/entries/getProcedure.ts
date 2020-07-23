import { entryType } from '../entries';

export default function getProcedure(procedure) {
  const html = [];

  html.push(`
    <div class="procedureDetails">
    </div>
  `);

  return html.join('');
}
