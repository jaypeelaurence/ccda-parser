import { styleInheritance } from '../../template';
import {
  getAct,
  getOrganizer,
  getObservation,
  getSubstanceAdministration,
  getEncounter,
  getProcedure,
} from '../entries';

export default function entryType(entry, style?: styleInheritance) {
  const html = [];

  const { name } = entry;

  if (name === 'organizer') {
    html.push(getOrganizer(entry, style));
  }

  if (name === 'encounter') {
    html.push(getEncounter(entry, style));
  }

  if (name === 'observation') {
    html.push(getObservation(entry, style));
  }

  if (name === 'act') {
    html.push(getAct(entry, style));
  }

  if (name === 'procedure') {
    html.push(getProcedure(entry, style));
  }

  if (name === 'substanceAdministration') {
    html.push(getSubstanceAdministration(entry, style));
  }

  return html.join('');
}
