export default function getEffectiveTime(effectiveTime){
  const html = [];

  const { high, low } = effectiveTime;     
  
  html.push(`
      <div>
        <strong>Effective Time:</strong>
        <div class="ml">
  `);

  if (effectiveTime.$) {
    html.push(` `);
  } else {
    let time ='';

    if (high) {
      time = high.$.value;
    }

    if (low) {
      time = low.$.value;
    }

    html.push(`
          ${time}
    `)
  }

  html.push(`
        </div>
      </div>
  `);

  // if(statusCode.$ && statusCode.$.code){    
  //   html.push(render(`
  //     <div>
  //       <strong>Status:</strong><div class="ml">{{$.code}}</div>
  //     </div>
  //   `, statusCode))
  // }

  return html.join('');
}