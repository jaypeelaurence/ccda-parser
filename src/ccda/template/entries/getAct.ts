import { entryType } from '../entries';

export default function getAct(act) {
  const html = [];

  html.push(`
    <div>
  `);

  html.push(entryType(act))

  html.push(`
    </div>
  `);

  return html.join('');
}
