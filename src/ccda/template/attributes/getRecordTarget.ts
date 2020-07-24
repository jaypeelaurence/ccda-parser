import formatDate from '../../methods/formatDate';

export default function getRecordTarget(recordTarget) {
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
    providerInfo: {
      name: '',
      phone: '',
    },
  };

  const { addr, patient, providerOrganization, telecom, id } = recordTarget;

  if (id) {
    if (Array.isArray(id)) {
      const patientId = id.find(patId => patId._attributes.root === '2.16.840.1.113883.4.1');

      if (patientId) {
        patientDetails.id = patientId._attributes.extension;
      }
    } else {
      patientDetails.id = id._attributes.extension;
    }
  }

  if (addr._attributes && addr._attributes.use && addr._attributes.use === 'HP') {
    const { streetAddressLine, city, state, postalCode, country } = addr;

    patientDetails.address = `${streetAddressLine._text}, ${city._text}, ${state._text}, ${postalCode._text}, ${country._text}`;
  }

  if (patient) {
    const {
      name,
      administrativeGenderCode,
      birthTime,
      maritalStatusCode,
      raceCode,
      languageCommunication,
    } = patient;

    if (name._attributes && name._attributes.use && name._attributes.use === 'L') {
      patientDetails.lastName = name.family._text;

      if (Array.isArray(name.given)) {
        patientDetails.firstName = name.given.find(patName => !patName.qualifier)._text;
      } else {
        patientDetails.firstName = name.given._text;
      }
    }

    if (administrativeGenderCode._attributes && administrativeGenderCode._attributes.code) {
      patientDetails.genderIdentity = administrativeGenderCode._attributes.code;
    }

    if (telecom._attributes && telecom._attributes.use && telecom._attributes.use === 'HP') {
      patientDetails.phone = telecom._attributes.value;
    }

    if (birthTime && birthTime._attributes && birthTime._attributes.value) {
      patientDetails.birthDate = `${formatDate(birthTime._attributes.value).split(' ')[0]}`;
    }

    if (languageCommunication) {
      const { languageCode } = languageCommunication;

      if (languageCode._attributes && languageCode._attributes.code) {
        patientDetails.language = languageCode._attributes.code;
      }
    }

    if (raceCode && raceCode._attributes) {
      patientDetails.race = raceCode._attributes.displayName.toLowerCase();
    }

    if (maritalStatusCode && maritalStatusCode._attributes) {
      patientDetails.maritalStatus = maritalStatusCode._attributes.displayName.toLowerCase();
    }

    if (providerOrganization) {
      patientDetails.providerInfo.name = providerOrganization.name._text;

      if (
        providerOrganization.telecom._attributes &&
        providerOrganization.telecom._attributes.use &&
        providerOrganization.telecom._attributes.use === 'WP'
      ) {
        patientDetails.providerInfo.phone = providerOrganization.telecom._attributes.value;
      }
    }
  }

  return patientDetails;
}
