import formatDate from '../../methods/formatDate';

export default function getEffectiveTime(effectiveTime){
  const html = [];

  const { high, low, _attributes } = effectiveTime;

  if ( high || low ) {
    html.push(`
      <div class="effectiveTimeDetails">
        <strong>Date/Time</strong>: `);

    if (_attributes) {
      let attrTime = '';

      if(_attributes.value) {
        attrTime = formatDate(_attributes.value);
      }

      html.push(`${attrTime} `);
    }

    if (low && low._attributes) {
      let lowTime = '';

      if(low._attributes.value) {
        lowTime = formatDate(low._attributes.value);
      }

      html.push(`low - ${lowTime} `);
    }

    if (high && high._attributes) {
      let highTime = '';

      if(high._attributes.value) {
        highTime = formatDate(high._attributes.value);
      }

      html.push(`high - ${highTime} `);
    }

    html.push(`
      </div>
    `);
  }

  return html.join('');
}