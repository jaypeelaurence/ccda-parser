import { render } from 'mustache';
import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let parent = '';
let children = '';

export default function getPlayingEntity(playingEntity, style?: styleInheritance) {
  const html = [];

  if (style) {
    if (style.parent) {
      parent = style.parent;
    }

    if (style.children) {
      children = style.children;
    }
  }

  html.push(`
    <div class="${['playingEntityDetails', parent].join(' ')}">
  `);

  const { name, desc } = playingEntity;

  if (name) {
    html.push(
      render(
        `
          <div class="${['label', children].join(' ')}">
            Name:
          </div>
          <div class="value">
            {{_text}}
          </div>
        `,
        name,
      ),
    );
  }

  if (desc) {
    html.push(
      render(
        `
          <div class="${['label', children].join(' ')}">
            Description:
          </div>
          <div class="value">
            {{_text}}
          </div>
        `,
        desc,
      ),
    );
  }

  html.push(attributeType(playingEntity));

  html.push(`
    </div>
  `);

  return html.join('');
}
