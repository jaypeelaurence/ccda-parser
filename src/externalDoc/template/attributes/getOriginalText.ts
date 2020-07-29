import { styleInheritance } from '../../template';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function getOriginalText(originalText, style?: styleInheritance) {
  const html = [];

  html.push(`${originalText.reference._attributes.value}`);

  return html.join('');
}
