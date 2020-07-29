import { styleInheritance } from '../../template';
import {
  getCode,
  getText,
  getStatusCode,
  getEffectiveTime,
  getAuthor,
  getDischargeDispositionCode,
  // getRouteCode,
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

export default function attributeType(attribute, style?: styleInheritance) {
  const html = [];

  const effectiveTime = attribute.find(elt => elt.name === 'effectiveTime');
  const performer = attribute.find(elt => elt.name === 'performer');

  // const {
  //   code,
  //   text,
  //   statusCode,
  //   // discharge,
  //   effectiveTime,
  //   author,
  //   dischargeDispositionCode,
  //   // routeCode,
  //   doseQuantity,
  //   // methodCode,
  //   consumable,
  //   performer,
  //   participant,
  //   entryRelationship,
  //   component,
  //   playingEntity,
  //   originalText,
  //   reference,
  // } = attribute;

  // if (code) {
  //   html.push(getCode(code, style));
  // }

  // if (text) {
  //   html.push(getText(text, style));
  // }

  // if (statusCode) {
  //   html.push(getStatusCode(statusCode, style));
  // }

  if (effectiveTime) {
    html.push(getEffectiveTime(effectiveTime, style));
  }

  // if (dischargeDispositionCode) {
  //   html.push(getDischargeDispositionCode(dischargeDispositionCode, style));
  // }

  // if (doseQuantity) {
  //   html.push(getDoseQuantity(doseQuantity, style));
  // }

  // if (consumable) {
  //   html.push(getConsumable(consumable, style));
  // }

  // if (author) {
  //   html.push(getAuthor(author, style));
  // }

  if (performer) {
    html.push(getPerformer(performer, style));
  }

  // if (participant) {
  //   html.push(getParticipant(participant, style));
  // }

  // if (entryRelationship) {
  //   html.push(getEntryRelationship(entryRelationship, style));
  // }

  // if (component) {
  //   html.push(getComponent(component, style));
  // }

  // if (playingEntity) {
  //   html.push(getPlayingEntity(playingEntity, style));
  // }

  // if (originalText) {
  //   html.push(getOriginalText(originalText, style));
  // }

  // if (reference) {
  //   html.push(getReference(reference, style));
  // }

  return html.join('');
}
