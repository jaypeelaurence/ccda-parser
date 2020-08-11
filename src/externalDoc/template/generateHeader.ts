import { render } from 'mustache';
import { getRecordTarget, getAuthor, getProviderDetails } from './attributes';

export default async function generateHeaders(header) {
  const html = [];

  html.push('<div class="headerDetails"><div>');

  let title = header.find(e => e.name === 'title');
  const recordTarget = header.find(e => e.name === 'recordTarget');
  const author = header.filter(e => e.name === 'author');
  const documentationOf = header.find(e => e.name === 'documentationOf');

  if (title) {
    title = title.elts.find(elt => elt.type === 'text');
    html.push(render('<h2 class="title">{{text}}</h2>', title));
  }

  if (recordTarget) {
    const patientRole = recordTarget.elts.find(e => e.name === 'patientRole');

    if (patientRole) {
      html.push('<div class="spacer">');
      html.push(await getRecordTarget(patientRole.elts));
      html.push('</div>');
    }
  }

  if (documentationOf) {
    const patientRole = recordTarget.elts.find(e => e.name === 'patientRole');
    let providerOrganization;

    if (patientRole) {
      providerOrganization = patientRole.elts.find(e => e.name === 'providerOrganization');
    }

    html.push('<div class="spacer">');
    html.push(await getProviderDetails({ providerOrganization, documentationOf }));
    html.push('</div>');
  }

  if (author) {
    html.push('<div class="spacer">');
    html.push('<div class="authorDetails">');
    html.push('<div class="title">Author Details:</div>');

    for (let i = 0; i < author.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      html.push(await getAuthor(author[i]));
    }

    html.push('</div></div>');
  }

  html.push('</div></div>');

  return html.join('');
}
