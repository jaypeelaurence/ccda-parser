import { formatDate } from '../../methods/formatDate';

export default function getEffectiveTime(effectiveTime) {
  const html = [];

  const { elts } = effectiveTime;

  let low = elts.find(e => e.name === 'low');
  let high = elts.find(e => e.name === 'high');

  html.push('<div class="effectiveTimeDetails">');
  html.push('<div class="custField"><div class="label">Date / Time:</div><div class="value">');

  if (low && low.atts && low.atts.value) {
    html.push(formatDate(low.atts.value));
  }

  if (high && high.atts && high.atts.value) {
    if (low) {
      html.push(` - `);
    }

    html.push(formatDate(high.atts.value));
  }

  html.push('</div></div></div>');

  return html.join('');
}
