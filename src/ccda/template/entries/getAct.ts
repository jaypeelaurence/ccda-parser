import { attributeType } from '../attributes';

export default function getAct(act) {
  const html = [];

  html.push(`
    <div class="actDetails">
      ${attributeType(act)}
    </div>
  `);

  return html.join('');
}
