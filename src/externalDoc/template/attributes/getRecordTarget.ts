import { render } from 'mustache';
import { formatDate, formatJsDate } from '../../methods/formatDate';
// import { genderIdentityValueMap } from '../../../core/constants/patientGenderIdentityDisplay';
// import { maritalStatusValueMap } from '../../../core/constants/maritalStatusValues';
// import cdcRaces from '../../../core/constants/cdcRaces';

export default function getRecordTarget(recordTarget) {
  const html = [];

  const id = recordTarget.find(e => e.name === 'id');
  const addr = recordTarget.find(e => e.name === 'addr');
  const telecom = recordTarget.find(e => e.name === 'telecom');
  const patient = recordTarget.find(e => e.name === 'patient');

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
    let streetAddressLine = addr.elts.find(e => e.name === 'streetAddressLine');
    streetAddressLine = streetAddressLine.elts.find(e => e.type === 'text');

    let city = addr.elts.find(e => e.name === 'city');
    city = city.elts.find(e => e.type === 'text');

    let postalCode = addr.elts.find(e => e.name === 'postalCode');
    postalCode = postalCode.elts.find(e => e.type === 'text');

    let country = addr.elts.find(e => e.name === 'country');
    country = country.elts.find(e => e.type === 'text');

    let state = addr.elts.find(e => e.name === 'state');
    state = state.elts.find(e => e.type === 'text');

    patientDetails.address = `${streetAddressLine.text}, ${city.text}, ${state.text}, ${postalCode.text}, ${country.text}`;
  }

  if (patient) {
    const name = patient.elts.find(e => e.name === 'name');
    let administrativeGenderCode = patient.elts.find(e => e.name === 'administrativeGenderCode');
    let birthTime = patient.elts.find(e => e.name === 'birthTime');
    let maritalStatusCode = patient.elts.find(e => e.name === 'maritalStatusCode');
    let raceCode = patient.elts.find(e => e.name === 'raceCode');
    let languageCommunication = patient.elts.find(e => e.name === 'languageCommunication');

    if (name || (name.atts && name.atts.use && name.atts.use === 'L')) {
      let given = name.elts.find(e => e.name === 'given');
      given = given.elts.find(e => e.type === 'text');
      let family = name.elts.find(e => e.name === 'family');
      family = family.elts.find(e => e.type === 'text');

      patientDetails.lastName = render(`{{text}}`, family);
      patientDetails.firstName = render(`{{text}}`, given);
    }

    // if (
    //   administrativeGenderCode &&
    //   administrativeGenderCode.atts &&
    //   administrativeGenderCode.atts.code
    // ) {
    //   patientDetails.genderIdentity = genderIdentityValueMap[administrativeGenderCode.atts.code];
    // }

    if (telecom && telecom.atts && telecom.atts.use && telecom.atts.use === 'HP') {
      patientDetails.phone = telecom.atts.value;
    }

    if (birthTime && birthTime.atts && birthTime.atts.value) {
      const age = new Date().getFullYear() - formatJsDate(birthTime.atts.value).getFullYear();

      patientDetails.birthDate = `${formatDate(birthTime.atts.value).split('-')[0]} (${age} years)`;
    }

    if (languageCommunication) {
      const languageCode = languageCommunication.elts.find(e => e.name === 'languageCode');

      if (languageCode && languageCode.atts && languageCode.atts.code) {
        patientDetails.language = languageCode.atts.code;
      }
    }

    // if (raceCode && raceCode.atts && raceCode.atts.code) {
    //   const cdcRaceCode = cdcRaces.find(cdcRace => cdcRace[0] === raceCode.atts.code);

    //   if (cdcRaceCode) {
    //     patientDetails.race = cdcRaceCode[1];
    //   }
    // }

    // if (maritalStatusCode && maritalStatusCode.atts && maritalStatusCode.atts.code) {
    //   patientDetails.maritalStatus = maritalStatusValueMap[maritalStatusCode.atts.code];
    // }
  }

  html.push('<div class="patientDetails">');

  html.push(render(`<h2 class="name">{{firstName}} {{lastName}}</h2>`, patientDetails));

  html.push(
    render(
      `<div class="custField"><div class="label nonLabel">Date of Birth:</div><div class="value">{{birthDate}}</div></div>`,
      patientDetails,
    ),
  );

  html.push(
    render(
      `<div class="custField"><div class="label nonLabel">Gender:</div><div class="value">{{genderIdentity}}</div></div>`,
      patientDetails,
    ),
  );

  html.push(
    render(
      `<div class="custField"><div class="label nonLabel">Marital Status:</div><div class="value">{{maritalStatus}}</div></div>`,
      patientDetails,
    ),
  );

  html.push(
    render(
      `<div class="custField"><div class="label nonLabel">Language:</div><div class="value">{{language}}</div></div>`,
      patientDetails,
    ),
  );

  html.push('</div>');

  return html.join('');
}
