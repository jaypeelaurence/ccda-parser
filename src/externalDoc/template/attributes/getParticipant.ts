import { attributeType } from '../attributes';

export default function getParticipant(participant) {
  const html = [];

  html.push('<div class="participantDetails">');

  const { elts } = participant;

  const participantRole = elts.find(e => e.name === 'participantRole');

  if (participantRole && participantRole.elts) {
    html.push(attributeType(participantRole.elts));
  }

  html.push('</div>');

  return html.join('');
}
