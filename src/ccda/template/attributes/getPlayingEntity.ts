import { render } from 'mustache';
import { attributeType } from '../attributes';

export default function getPlayingEntity(playingEntity){
  const html = [];

  html.push(`
    <div class="playingEntityDetails">
  `);

  const { name, desc } = playingEntity;

  if (name) {
    html.push(render(`
      <strong>Name</strong>: _text
    `, name));
  }

  if (desc) {
    html.push(render(`
      <strong>Description</strong>: _text
    `, desc));
  }

  html.push(attributeType(playingEntity));

  html.push(`
    </div>
  `);

  return html.join('');
}
