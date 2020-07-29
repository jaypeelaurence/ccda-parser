import { render } from 'mustache';
import { getRecordTarget, getAuthor, getProviderDetails } from './attributes';

export default async function generateHeaders(header) {
  const html = [];

  html.push('<div class="headerDetails">');

  let title = header.find(elt => elt.name === 'title');
  const recordTarget = header.find(elt => elt.name === 'recordTarget');
  const author = header.find(elt => elt.name === 'author');
  const documentationOf = header.find(elt => elt.name === 'documentationOf');

  if (title) {
    title = title.elts.find(elt => elt.type === 'text');
    html.push(render('<h1 class="title">{{text}}</h1>', title));
  }

  if (recordTarget) {
    const patientRole = recordTarget.elts.find(elt => elt.name === 'patientRole');

    if (patientRole) {
      html.push('<div class="spacer">');
      html.push(await getRecordTarget(patientRole.elts, { parent: 'inline', children: 'inlineBlock' }));
      html.push('</div>');
    }
  }

  if (documentationOf) {
    const patientRole = recordTarget.elts.find(elt => elt.name === 'patientRole');
    let providerOrganization;

    if (patientRole) {
      providerOrganization = patientRole.elts.find(elt => elt.name === 'providerOrganization');
    }

    html.push('<div class="spacer">');
    html.push(await getProviderDetails({ providerOrganization, documentationOf }, { parent: 'inline', children: 'inlineBlock' }));
    html.push('</div>');
  }

  if (author) {
    html.push('<div class="spacer">');
    html.push(await getAuthor(author.elts, { parent: 'inline', children: 'inlineBlock' }));
    html.push('</div>');
  }

  html.push('</div>');

  return html.join('');
}