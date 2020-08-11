import { textType } from '../texts';

function renderCaption(caption) {
  return `<span>${textType(caption)}</span>`;
}

export default function getCaption(caption) {
  return renderCaption(caption);
}
