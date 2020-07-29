import { render } from 'mustache';
import { styleInheritance } from '../../template';

let parent = '';
let children = '';

export default function getPerformer(performer, style?: styleInheritance) {
  if (style) {
    if (style.parent) {
      parent = style.parent;
    }
    if (style.children) {
      children = style.children;
    }
  }

  const html = [];

  const { elts } = performer;

  let functionCode = elts.find(elt => elt.name === 'functionCode');
  const assignedEntity = elts.find(elt => elt.name === 'assignedEntity');
  
  if (assignedEntity) {
    const assignedPerson = assignedEntity.elts.find(elt => elt.name === 'assignedPerson');

    if (assignedPerson) {
      const name = assignedPerson.elts.find(elt => elt.name === 'name');    

      if (name) {
        let given = name.elts.find(elt => elt.name === 'given');
        given = given.elts.find(elt => elt.type === 'text');
        let family = name.elts.find(elt => elt.name === 'family');
        family = family.elts.find(elt => elt.type === 'text');

        html.push(`<div class="${['performerDetails', parent].join(' ')}">`);

        if (functionCode) {
          functionCode = functionCode.atts;
        } else {
          functionCode = {};
        }

        html.push(`<div class="${['label', children].join(' ')}">Performer:</div>`);

        html.push('<div class="value">');

        html.push(`${render(`{{text}}`, given)} ${render(`{{text}}`, family)} <i>${render(`{{displayName}}`, functionCode)}</i>`);

        html.push('</div>');
        html.push('</div>');
      }
    }
  }

  return html.join('');
}
