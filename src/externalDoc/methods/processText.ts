export default function processText(value) {
  let newValue = value.replace(/\n/g, '<br />');
  newValue = newValue.replace(/\t/g, '');

  newValue = newValue.replace('tel:+', '');
  newValue = newValue.replace('<br />', ' ');
  newValue = newValue.replace('|', '');

  return newValue;
}
