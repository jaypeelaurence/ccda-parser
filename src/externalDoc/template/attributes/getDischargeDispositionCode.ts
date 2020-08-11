import { render } from 'mustache';

export default function getDischargeDispositionCode(dischargeDispositionCode) {
  const html = [];

  const { _attributes } = dischargeDispositionCode;

  html.push(`
    <div class="dischargeDispositionCodeDetails">
        <div class="label">
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
