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

  const { act, organizer, observation, substanceAdministration, encounter, procedure } = entry;

  if (organizer) {
    html.push(getOrganizer(organizer, style));
  }

  if (encounter) {
    html.push(getEncounter(encounter, style));
  }

  if (observation) {
    html.push(getObservation(observation, style));
  }

  if (act) {
    html.push(getAct(act, style));
  }

  if (procedure) {
    html.push(getProcedure(procedure, style));
  }

  if (substanceAdministration) {
    html.push(getSubstanceAdministration(substanceAdministration, style));
  }

  return html.join('');
}
