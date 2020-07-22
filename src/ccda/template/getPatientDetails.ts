export default function getPatientDetails(recordTarget) {
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
      const patientId = id.find(given => given.$.root === '2.16.840.1.113883.4.1');

      if (patientId) {
        patientDetails.id = patientId.$.extension;
      }
    } else {
      patientDetails.id = id.$.extension;
    }
  }

  if (addr.$ && addr.$.use && addr.$.use === 'HP') {
    const { streetAddressLine, city, state, postalCode, country } = addr;

    patientDetails.address = `${streetAddressLine}, ${city}, ${state}, ${postalCode}, ${country}`;
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

    if (name.$ && name.$.use && name.$.use === 'L') {
      switch (typeof name.family) {
        case 'object': {
          patientDetails.lastName = '';

          if (name.family.$ && name.family.$.qualifier && name.family.$.qualifier === 'SP') {
            patientDetails.lastName = name.family._;
          }

          break;
        }
        default: {
          patientDetails.lastName = name.family;

          break;
        }
      }

      if (Array.isArray(name.given)) {
        patientDetails.firstName = name.given.find(given => !given.qualifier);
      } else {
        patientDetails.firstName = name.given;
      }
    }

    if (administrativeGenderCode.$ && administrativeGenderCode.$.code) {
      patientDetails.genderIdentity = administrativeGenderCode.$.code;
    }

    if (telecom.$ && telecom.$.use && telecom.$.use === 'HP') {
      patientDetails.phone = telecom.$.value;
    }

    if (birthTime && birthTime.$ && birthTime.$.value) {
      const birthDate = birthTime.$.value.split(``);

      let year = birthDate.slice(0, 4).join('');
      let month;
      let day;

      if (birthDate.length > 4) {
        month = birthDate.slice(4, 6).join('');
        day = birthDate.slice(6, 8).join('');
      }

      patientDetails.birthDate = `${month}-${day}-${year}`;
    }

    if (languageCommunication) {
      const { languageCode } = languageCommunication;

      if (languageCode.$ && languageCode.$.code) {
        patientDetails.language = languageCode.$.code;
      }
    }

    if (raceCode && raceCode.$) {
      patientDetails.race = raceCode.$.displayName.toLowerCase();
    }

    if (maritalStatusCode && maritalStatusCode.$) {
      patientDetails.maritalStatus = maritalStatusCode.$.displayName.toLowerCase();
    }

    if (providerOrganization) {
      patientDetails.providerInfo.name = providerOrganization.name;

      if (
        providerOrganization.telecom.$ &&
        providerOrganization.telecom.$.use &&
        providerOrganization.telecom.$.use === 'WP'
      ) {
        patientDetails.providerInfo.phone = providerOrganization.telecom.$.value;
      }
    }
  }

  return patientDetails;
}
