import { render } from 'mustache';
import { attributeType } from '../attributes';

export default function getProviderDetails(providerDetail) {
  const html = [];

  const { providerOrganization } = providerDetail;

  const providerDetails = {
    name: '',
    address: '',
    phone: '',
  };

  if (providerOrganization) {
    let name = providerOrganization.elts.find(e => e.name === 'name');
    name = name.elts.find(e => e.type === 'text');

    providerDetails.name = render(`{{text}}`, name);

    const addr = providerOrganization.elts.find(e => e.name === 'addr');

    if (addr) {
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

      providerDetails.address = `${streetAddressLine.text}, ${city.text}, ${state.text}, ${postalCode.text}, ${country.text}`;
    }

    providerDetails.phone = providerOrganization.elts.find(e => e.name === 'telecom').atts;
  }

  const serviceEvent = providerDetail.documentationOf.elts.find(e => e.name === 'serviceEvent');

  html.push('<div class="providerDetails">');
  html.push('<div class="title">Provider Details:</div>');

  if (serviceEvent) {
    const { elts } = serviceEvent;

    if (elts) {
      html.push(attributeType(elts));
    }
  }

  html.push(
    render(
      `<div class="custField"><div class="label nonLabel">Organization:</div><div class="value">{{name}}</div></div>`,
      providerDetails,
    ),
  );

  html.push(
    render(
      `<div class="custField"><div class="label nonLabel">Address:</div><div class="value">{{address}}</div></div>`,
      providerDetails,
    ),
  );

  html.push(
    render(
      `<div class="custField"><div class="label nonLabel">Telecom:</div><div class="value">{{phone.value}}</div></div>`,
      providerDetails,
    ),
  );

  html.push('</div>');

  return html.join('');
}
