import { formatDate } from '../../methods/formatDate';
import { styleInheritance } from '../../template';

let parent = '';
let children = '';

export default function getEffectiveTime(effectiveTime, style?: styleInheritance) {
  if (style) {
    if (style.parent) {
      parent = style.parent;
    }

    if (style.children) {
      children = style.children;
    }
  }

  const html = [];

  const { elts } = effectiveTime;

  let low = elts.find(elt => elt.name === 'low');
  let high = elts.find(elt => elt.name === 'high');

  html.push(`<div class="${['effectiveTimeDetails', parent].join(' ')}">`);
  html.push(`<div class="${['label', children].join(' ')}">Date / Time:</div>`);
  html.push('<div class="value">');

  if (low && low.atts && low.atts.value) {
    html.push(formatDate(low.atts.value));
  }

  if (high && high.atts && high.atts.value) {
    if (low) {
      html.push(` - `);
    }

    html.push(formatDate(high.atts.value));
  }

  html.push('</div>');
  html.push('</div>');

  return html.join('');
}
