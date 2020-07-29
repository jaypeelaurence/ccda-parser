import { render } from 'mustache';
import { formatDate, formatJsDate } from '../../methods/formatDate';
import { attributeType } from '../attributes';
import { styleInheritance } from '../../template';

let parent = '';
let children = '';

export default function getProviderDetails(providerDetail, style?: styleInheritance) {
  if (style) {
    if (style.parent) {
      parent = style.parent;
    }

    if (style.children) {
      children = style.children;
    }
  }

  const html = [];

  const { providerOrganization } = providerDetail;

  const providerDetails = {
    name: '',
    address: '',
    phone: ''
  };

  if (providerOrganization) {
    let name = providerOrganization.elts.find(elt => elt.name === 'name');
    name = name.elts.find(elt => elt.type === 'text');

    providerDetails.name = render(`{{text}}`, name);

    const addr = providerOrganization.elts.find(elt => elt.name === 'addr');

    if (addr) {
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

      providerDetails.address = `${streetAddressLine.text}, ${city.text}, ${state.text}, ${postalCode.text}, ${country.text}`;
    }

    providerDetails.phone = providerOrganization.elts.find(elt => elt.name === 'telecom').atts;
  }

  const serviceEvent = providerDetail.documentationOf.elts.find(elt => elt.name === 'serviceEvent');

  html.push(`<div class="${['providerDetails', parent].join(' ')}">`);
  html.push('<div class="label">Provider Details:</div>');
  html.push(`<div class="${children}">`);

  if (serviceEvent) {
    html.push(attributeType(serviceEvent.elts, { parent: 'inlineBlock', children: 'nonLabel' }));
  }

  html.push(render(`<div class="${children}"><div class="label nonLabel">Organization:</div><div class="value">{{name}}</div></div>`, providerDetails));

  html.push(render(`<div class="${children}"><div class="label nonLabel">Address:</div><div class="value">{{address}}</div></div>`, providerDetails));

  html.push(render(`<div class="${children}"><div class="label nonLabel">Telecom:</div><div class="value">{{phone.value}}</div></div>`, providerDetails));

  html.push('</div>');
  html.push('</div>');

  return html.join('');
}
