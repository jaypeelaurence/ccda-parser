export default function getOriginalText(originalText){
  const html = [];

  html.push(`${originalText.reference._attributes.value}`)

  return html.join('');
}
