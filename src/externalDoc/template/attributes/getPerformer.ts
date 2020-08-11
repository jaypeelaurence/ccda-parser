import { render } from 'mustache';

export default function getPerformer(performer) {
  const html = [];

  const { elts } = performer;

  let functionCode = elts.find(e => e.name === 'functionCode');
  const assignedEntity = elts.find(e => e.name === 'assignedEntity');

  if (assignedEntity) {
    const assignedPerson = assignedEntity.elts.find(e => e.name === 'assignedPerson');

    if (assignedPerson) {
      const name = assignedPerson.elts.find(e => e.name === 'name');

      if (name) {
        let given = name.elts.find(e => e.name === 'given');
        given = given.elts.find(elt => elt.type === 'text');
        let family = name.elts.find(e => e.name === 'family');
        family = family.elts.find(elt => elt.type === 'text');

        html.push('<div class="performerDetails">');
        html.push('<div class="custField"><div class="label">Performer:</div><div class="value">');

        if (functionCode) {
          functionCode = functionCode.atts;
        } else {
          functionCode = {};
        }

        html.push(
          `${render(`{{text}}`, given)} ${render(`{{text}}`, family)} <i>${render(
            `{{displayName}}`,
            functionCode,
          )}</i>`,
        );

        html.push('</div></div></div>');
      }
    }
  }

  return html.join('');
}
