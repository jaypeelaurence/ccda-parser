import { entryType } from '../entries';

export default function getAct(act) {
  const html = [];

  html.push(`
    <div class="actDetails">
    </div>
  `);

  return html.join('');
}
