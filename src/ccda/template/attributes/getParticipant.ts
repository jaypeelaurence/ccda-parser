import { attributeType } from '../attributes';

export default function getParticipant(participant){
  const html = [];

  const { participantRole } = participant;

  html.push(`
    <div class="participantDetails">
  `);

  html.push(attributeType(participantRole));

  html.push(`
    </div>
  `);

  return html.join('');
}
