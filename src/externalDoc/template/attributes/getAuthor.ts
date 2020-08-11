import { render } from 'mustache';
import { formatDate } from '../../methods/formatDate';

function renderDate(time) {
  const html = [];

  const attrTime = formatDate(time);

  html.push('<div class="custField"><div class="label">Authored on:</div><div class="value">');
  html.push(attrTime);
  html.push('</div></div>');

  return html.join('');
}

function renderAuthorOrg(org) {
  const html = [];

  const { elts, time } = org;

  if (elts) {
    let name = elts.find(e => e.name === 'name');
    name = name.elts.find(e => e.type === 'text');
    const addr = elts.find(e => e.name === 'addr');
    const telecom = elts.find(e => e.name === 'telecom');

    if (name) {
      html.push('<div class="custField"><div class="label">Author:</div><div class="value">');
      html.push(render(`{{text}}`, name));
      html.push('</div></div>');
    }

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

      html.push('<div class="custField"><div class="label">Address:</div><div class="value">');
      html.push(
        `${streetAddressLine.text}, ${city.text}, ${state.text}, ${postalCode.text}, ${country.text}`,
      );
      html.push('</div></div>');
    }

    if (telecom && telecom.atts) {
      html.push('<div class="custField"><div class="label">Telecom:</div><div class="value">');
      html.push(render(`{{value}}`, telecom.atts));
      html.push('</div></div>');
    }
  }

  if (time && time.atts && time.atts.value) {
    html.push(`${renderDate(time.atts.value)}`);
  }

  return html.join('');
}

function renderAuthorName(name) {
  const html = [];

  const { elts, time } = name;

  html.push('<div class="custField"><div class="label">Author:</div><div class="value">');

  if (elts) {
    let given = elts.find(e => e.name === 'given');
    given = given.elts.find(e => e.type === 'text');
    let family = elts.find(e => e.name === 'family');
    family = family.elts.find(e => e.type === 'text');

    html.push('');

    if (given) {
      html.push(render(`{{text}}`, given));
    }

    if (family) {
      html.push(render(` {{text}}`, family));
    }
  }
  html.push('</div></div>');

  if (time && time.atts && time.atts.value) {
    html.push(`${renderDate(time.atts.value)}`);
  }

  return html.join('');
}

function getAuthorType(author) {
  const html = [];

  if (author) {
    const assignedAuthor = author.elts.find(e => e.name === 'assignedAuthor');
    const time = author.elts.find(e => e.name === 'time');

    const assignedPerson = assignedAuthor.elts.find(e => e.name === 'assignedPerson');
    const assignedAuthoringDevice = assignedAuthor.elts.find(
      e => e.name === 'assignedAuthoringDevice',
    );
    const representedOrganization = assignedAuthor.elts.find(
      e => e.name === 'representedOrganization',
    );

    if (assignedPerson) {
      const name = assignedPerson.elts.find(e => e.name === 'name');

      html.push(renderAuthorName({ ...name, time }));
    }

    if (assignedAuthoringDevice && representedOrganization) {
      html.push(
        renderAuthorOrg({
          ...assignedAuthoringDevice,
          ...representedOrganization,
          time,
        }),
      );
    }
  }

  return html.join('');
}

export default function getAuthor(author) {
  const html = [];

  html.push(`<div class="authorDetails">`);
  html.push(getAuthorType(author));
  html.push('</div>');

  return html.join('');
}
