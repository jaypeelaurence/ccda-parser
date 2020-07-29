import { render } from 'mustache';
import { formatDate, formatJsDate } from '../../methods/formatDate';
import { styleInheritance } from '../../template';
// import patientGenderIdentityDisplay from 'core/constants/patientGenderIdentityDisplay';
// import maritalStatusValues from 'core/constants/patientGenderIdentityDisplay';
// import cdcRaces from 'core/constants/cdcRaces';
import patientGenderIdentityDisplay from '../../../core/constants/patientGenderIdentityDisplay';
import maritalStatusValues from '../../../core/constants/patientGenderIdentityDisplay';
import cdcRaces from '../../../core/constants/cdcRaces';

let parent = '';
let children = '';

export default function getRecordTarget(recordTarget, style?: styleInheritance) {
  if (style) {
    if (style.parent) {
      parent = style.parent;
    }

    if (style.children) {
      children = style.children;
    }
  }

  const html = [];

  const id = recordTarget.find(elt => elt.name === 'id');
  const addr = recordTarget.find(elt => elt.name === 'addr');
  const telecom = recordTarget.find(elt => elt.name === 'telecom');
  const patient = recordTarget.find(elt => elt.name === 'patient');

  const patientDetails = {
    id: '',
    address: '',
    birthDate: '',
    firstName: '',
    lastName: '',
    genderIdentity: '',
    language: '',
    maritalStatus: '',
    phone: '',
    race: '',
  };

  if (id && id.atts && id.atts.extension) {
    patientDetails.id = id.atts.extension;
  }

  if (addr && addr.atts && addr.atts.use && addr.atts.use === 'HP') {
    let streetAddressLine = addr.elts.find(elt => elt.name === 'streetAddressLine');
    streetAddressLine = streetAddressLine.elts.find(elt => elt.type === 'text');

    let city = addr.elts.find(elt => elt.name === 'city');
    city = city.elts.find(elt => elt.type === 'text');

    let postalCode = addr.elts.find(elt => elt.name === 'postalCode');
    postalCode = postalCode.elts.find(elt => elt.type === 'text');

    let country = addr.elts.find(elt => elt.name === 'country');
    country = country.elts.find(elt => elt.type === 'text');

    let state = addr.elts.find(elt => elt.name === 'state');
    state = state.elts.find(elt => elt.type === 'text');

    patientDetails.address = `${streetAddressLine.text}, ${city.text}, ${state.text}, ${postalCode.text}, ${country.text}`;
  }

  if (patient) {
    const name = patient.elts.find(elt => elt.name === 'name');
    let administrativeGenderCode = patient.elts.find(elt => elt.name === 'administrativeGenderCode');
    let birthTime = patient.elts.find(elt => elt.name === 'birthTime');
    let maritalStatusCode = patient.elts.find(elt => elt.name === 'maritalStatusCode');
    let raceCode = patient.elts.find(elt => elt.name === 'raceCode');
    let languageCommunication = patient.elts.find(elt => elt.name === 'languageCommunication');

    if (name && name.atts && name.atts.use && name.atts.use === 'L') {
      let given = name.elts.find(elt => elt.name === 'given');
      given = given.elts.find(elt => elt.type === 'text');
      let family = name.elts.find(elt => elt.name === 'family');
      family = family.elts.find(elt => elt.type === 'text');

      patientDetails.lastName = render(`{{text}}`, family);
      patientDetails.firstName = render(`{{text}}`, given);
    }

    if (administrativeGenderCode && administrativeGenderCode.atts && administrativeGenderCode.atts.code) {
      patientDetails.genderIdentity = 
        patientGenderIdentityDisplay[administrativeGenderCode.atts.code];
    }

    if (telecom && telecom.atts && telecom.atts.use && telecom.atts.use === 'HP') {
      patientDetails.phone = telecom.atts.value;
    }

    if (birthTime && birthTime.atts && birthTime.atts.value) {
      const age =
        new Date().getFullYear() - formatJsDate(birthTime.atts.value).getFullYear();

      patientDetails.birthDate = `${
        formatDate(birthTime.atts.value).split('-')[0]
      } (${age} years)`;
    }

    if (languageCommunication) {
      const languageCode = languageCommunication.elts.find(elt => elt.name === 'languageCode');

      if (languageCode && languageCode.atts && languageCode.atts.code) {
        patientDetails.language = languageCode.atts.code;
      }
    }

    if (raceCode && raceCode.atts && raceCode.atts.code) {
      const cdcRaceCode = cdcRaces.find(cdcRace => cdcRace[0] === raceCode.atts.code);

      if (cdcRaceCode) {
        patientDetails.race = cdcRaceCode[1];
      }
    }

    if (maritalStatusCode && maritalStatusCode.atts && maritalStatusCode.atts.code) {
      patientDetails.maritalStatus = maritalStatusValues[maritalStatusCode.atts.code];
    }
  }

  html.push(`<div class="${['patientDetails', parent].join(' ')}">`);

  html.push('<div class="label">Patient Details:</div>');
  html.push(`<div class="${children}">`);
  html.push(render(`<div class="value">{{firstName}} {{lastName}} <i>(legal)</i></div>`, patientDetails));

  html.push(render(`<div class="${children}"><div class="label nonLabel">Date of Birth:</div><div class="value">{{birthDate}}</div></div>`, patientDetails));

  html.push(render(`<div class="${children}"><div class="label nonLabel">Gender:</div><div class="value">{{genderIdentity}}</div></div>`, patientDetails));
  
  html.push(render(`<div class="${children}"><div class="label nonLabel">Marital Status:</div><div class="value">{{maritalStatus}}</div></div>`, patientDetails));
  
  html.push(render(`<div class="${children}"><div class="label nonLabel">Language:</div><div class="value">{{language}}</div></div>`, patientDetails));

  html.push('</div></div>');

  return html.join('');
}
