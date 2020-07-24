import { render } from 'mustache';

export default function getPerformer(performer){
  const html = [];

  const { assignedEntity } = performer;

  if (assignedEntity) {
    const { addr, telecom, assignedPerson, representedOrganization } = assignedEntity;

    html.push(`
      <div class="performerDetails">
    `);

    if (assignedPerson) {
      html.push(render(`
        <strong>Performer</strong>: {{given._text}} {{family._text}}
      `, assignedPerson.name));
    }

    if (addr) {
      html.push(render(`
        <strong>Adress</strong>: {{streetAddressLine._text}}, {{city._text}}, {{state._text}}, {{postalCode._text}}, {{country._text}}
      `, addr));
    }

    if (telecom) {
      html.push(render(`
        <strong>Phone</strong>: {{value}}
      `, telecom._attributes));
    }

    if (representedOrganization) {
      html.push(render(`
        <strong>Organization</strong>: {{value}}
      `, representedOrganization.name));
    }

    html.push(`
      </div>
    `);
  }

  return html.join('');
}
