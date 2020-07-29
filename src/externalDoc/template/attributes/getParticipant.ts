import { attributeType } from '../attributes';

export default function getParticipant(participant, style = null) {
  const html = [];

  const { participantRole } = participant;

  html.push(`
    <div class="participantDetails">
  `);

  html.push(attributeType(participantRole, style));

  html.push(`
    </div>
  `);

  return html.join('');
}
