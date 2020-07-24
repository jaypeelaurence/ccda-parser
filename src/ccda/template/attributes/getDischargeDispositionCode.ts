import { render } from 'mustache';

export default function getDischargeDispositionCode(dischargeDispositionCode){
  const html = [];

  const { _attributes } = dischargeDispositionCode;

  html.push(`
    <div class="dischargeDispositionCodeDetails">
        <strong>Discharge Disposition Code</strong>: `);

  html.push(render(`{{displayName}} - {{codeSystemName}}`, _attributes))

  html.push(`
    </div>
  `)

  return html.join('');
}