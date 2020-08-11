import {
  getCode,
  getText,
  getStatusCode,
  getEffectiveTime,
  // getAuthor,
  // getDischargeDispositionCode,
  // getRouteCode,
  // getDoseQuantity,
  // getMethodCode,
  getConsumable,
  getPerformer,
  getParticipant,
  getEntryRelationship,
  getComponent,
  getPlayingEntity,
  getOriginalText,
  // getReference,
} from '../attributes';

export default function attributeType(attribute) {
  const html = [];

  // const author = attribute.filter(e => e.name === 'author');
  const code = attribute.filter(e => e.name === 'code');
  const text = attribute.filter(e => e.name === 'text');
  const statusCode = attribute.filter(e => e.name === 'statusCode');
  // const discharge = attribute.filter(e => e.name === 'discharge');
  const effectiveTime = attribute.filter(e => e.name === 'effectiveTime');
  // const dischargeDispositionCode = attribute.filter(e => e.name === 'dischargeDispositionCode');
  const entryRelationship = attribute.filter(e => e.name === 'entryRelationship');
  // const routeCode = attribute.filter(e => e.name === 'routeCode');
  // const doseQuantity = attribute.filter(e => e.name === 'doseQuantity');
  // const methodCode = attribute.filter(e => e.name === 'methodCode');
  const consumable = attribute.filter(e => e.name === 'consumable');
  const performer = attribute.filter(e => e.name === 'performer');
  const participant = attribute.filter(e => e.name === 'participant');
  const component = attribute.filter(e => e.name === 'component');
  const originalText = attribute.filter(e => e.name === 'originalText');
  const playingEntity = attribute.filter(e => e.name === 'playingEntity');
  // const reference = attribute.filter(e => e.name === 'reference');

  if (code.length) {
    code.forEach(e => {
      html.push(getCode(e));
    });
  }

  if (text.length) {
    text.forEach(e => {
      html.push(getText(e));
    });
  }

  if (statusCode.length) {
    statusCode.forEach(e => {
      html.push(getStatusCode(e));
    });
  }

  if (effectiveTime.length) {
    effectiveTime.forEach(e => {
      html.push(getEffectiveTime(e));
    });
  }

  // if (name === 'dischargeDispositionCode') {
  //   // html.push(getDischargeDispositionCode(attribute, style));
  // }

  // if (name === 'doseQuantity') {
  //   // html.push(getDoseQuantity(attribute, style));
  // }

  if (consumable.length) {
    consumable.forEach(e => {
      html.push(getConsumable(e));
    });
  }

  if (performer.length) {
    performer.forEach(e => {
      html.push(getPerformer(e));
    });
  }

  if (participant.length) {
    participant.forEach(e => {
      html.push(getParticipant(e));
    });
  }

  if (entryRelationship.length) {
    html.push(getEntryRelationship(entryRelationship));
  }

  if (component.length) {
    html.push(getComponent(component));
  }

  if (playingEntity.length) {
    playingEntity.forEach(e => {
      html.push(getPlayingEntity(e));
    });
  }

  if (originalText.length) {
    originalText.forEach(e => {
      html.push(getOriginalText(e));
    });
  }

  return html.join('');
}
