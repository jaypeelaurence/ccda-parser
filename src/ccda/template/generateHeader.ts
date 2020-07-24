import { render } from 'mustache';

import { getRecordTarget, getAuthor } from './attributes';

export default function generateHeaders(header) {
  const html = [];

  const {
    title,
    recordTarget: { patientRole },
    author,
  } = header;

  const authorDetails = getAuthor(author);
  const patientDetails = getRecordTarget(patientRole);

  html.push(`
      <div class="headerDetails">
        <h2 style="margin:1em 0">${title._text}</h2>
        <div class="patientDetails">
  `);

  html.push(
    render(
      `
          <div>
            <strong>Documentation Of:</strong><div class="ml">{{providerInfo.name}}</div>
          </div>
      `,
      patientDetails,
    ),
  );

  html.push(authorDetails);

  html.push(
    render(
      `
          <div>
            <strong>Patient:</strong><div class="ml">{{firstName}} {{lastName}}</div>
          </div>
          <div>
            <strong>Patient-Id:</strong><div class="ml">{{id}}</div>
          </div>
          <div>
            <strong>Date of Birth:</strong><div class="ml">{{birthDate}}</div>
          </div>
          <div>
            <strong>Gender:</strong><div class="ml">{{genderIdentity}}</div>
          </div>
          <div>
            <strong>Race:</strong><div class="ml">{{race}}</div>
          </div>
          <div>
            <strong>Marital Status:</strong><div class="ml">{{maritalStatus}}</div>
          </div>
      `,
      patientDetails,
    ),
  );

  html.push(`
        </div>
      </div>
  `);

  return html.join('');
}
