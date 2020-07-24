import {
  getCode,
  getText,
  getStatusCode,
  getEffectiveTime,
  getAuthor,
  getDischargeDispositionCode,
  getRouteCode,
  getDoseQuantity,
  // getMethodCode,
  getConsumable,
  getPerformer,
  getParticipant,
  getEntryRelationship,
  getComponent,
  getPlayingEntity,
  getOriginalText,
  getReference,
} from '../attributes';

export default function attributeType(attribute) {
  const html = [];

  const {
    code,
    text,
    statusCode,
    discharge,
    effectiveTime,
    author,
    dischargeDispositionCode,
    routeCode,
    doseQuantity,
    methodCode,
    consumable,
    performer,
    participant,
    entryRelationship,
    component,
    playingEntity,
    originalText,
    reference,
  } = attribute;

  if (code) {
    html.push(getCode(code));
  }

  if (text) {
    html.push(getText(text));
  }

  if (statusCode) {
    html.push(getStatusCode(statusCode));
  }

  if (effectiveTime) {
    html.push(getEffectiveTime(effectiveTime));
  }

  if (dischargeDispositionCode) {
    html.push(getDischargeDispositionCode(dischargeDispositionCode))
  }

  if (routeCode) {
    // html.push(getRouteCode(routeCode))
  }

  if (doseQuantity) {
    html.push(getDoseQuantity(doseQuantity))
  }

  if (methodCode) {
    // console.log(methodCode)
  }

  if (consumable) {
    html.push(getConsumable(consumable))
  } 

  if (author) {
    html.push(getAuthor(author))
  }

  if (performer) {
    html.push(getPerformer(performer))
  }

  if (participant) {
    html.push(getParticipant(participant))
  }

  if (entryRelationship) {
    html.push(getEntryRelationship(entryRelationship))
  }

  if (component) {
    html.push(getComponent(component))
  }

  if (playingEntity) {
    html.push(getPlayingEntity(playingEntity))
  }

  if (originalText) {
    html.push(getOriginalText(originalText))
  }

  if (reference) {
    html.push(getReference(reference))
  }

  return html.join('');
}
