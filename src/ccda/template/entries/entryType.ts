import {
  getAct,
  getOrganizer,
  getObservation,
  getSubstanceAdministration,
  getEncounter,
  getProcedure,
} from '../entries';

export default function entryType(entry) {
  const html = [];

  const {
    act,
    organizer,
    observation,
    substanceAdministration,
    encounter,
    procedure,
  } = entry;

  if (organizer) {
    html.push(getOrganizer(organizer));
  }

  if (encounter) {
    html.push(getEncounter(encounter));
  }

  if (observation) {
    html.push(getObservation(observation));
  }

  if (act) {
    html.push(getAct(act));
  }

  if (procedure) {
    html.push(getProcedure(procedure));
  }

  if (substanceAdministration) {
    html.push(getSubstanceAdministration(substanceAdministration));
  }

  return html.join('');
}
