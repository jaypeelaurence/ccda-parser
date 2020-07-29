import { render } from 'mustache';
import { styleInheritance } from '../../template';

let parent = '';
let children = '';

export default function getDischargeDispositionCode(
  dischargeDispositionCode,
  style?: styleInheritance,
) {
  const html = [];

  if (style) {
    if (style.parent) {
      parent = style.parent;
    }

    if (style.children) {
      children = style.children;
    }
  }

  const { _attributes } = dischargeDispositionCode;

  html.push(`
    <div class="${['dischargeDispositionCodeDetails', parent].join(' ')}">
        <div class="${['label', children].join(' ')}">
          Discharge Disposition:
        </div>
  `);

  html.push(
    render(
      `
        <div class="value">
          {{displayName}} - {{codeSystemName}}
        </div>
      `,
      _attributes,
    ),
  );

  html.push(`
    </div>
  `);

  return html.join('');
}
