import { render } from 'mustache';

export default function getPlayingEntity(playingEntity) {
  const html = [];

  html.push('<div class="playingEntityDetails"><div class="custField">');

  const { elts } = playingEntity;

  let name = elts.find(e => e.name === 'name');
  let desc = elts.find(e => e.name === 'desc');

  if (name) {
    name = name.elts.find(e => e.type === 'text');

    html.push(
      render(
        `<div class="label">Name:</div><div class="value"><div class="value">{{text}}</div></div>`,
        name,
      ),
    );
  }

  if (desc) {
    desc = desc.elts.find(e => e.type === 'text');

    html.push(
      render(
        `<div class="label">Description:</div><div class="value"><div class="value">{{text}}</div></div>`,
        desc,
      ),
    );
  }

  html.push('</div></div>');

  return html.join('');
}
