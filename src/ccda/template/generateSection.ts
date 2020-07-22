import { render } from 'mustache';
import generateEntry from './generateEntry';

const generateSection = async component => {
  const html = [];

  html.push(`
      <div class="sectionBody">
  `);

  for (let i = 0; i < component.length; i += 1) {
    const { section } = component[i];

    let entryDetails = await generateEntry(section); // eslint-disable-line no-await-in-loop

    html.push(
      render(
        `
          <div class="sectionDetails">
            <h2 style="margin:1em 0">{{title}}</h2>
        `,
        section,
      ),
    );

    html.push(entryDetails);

    html.push(`
        </div>
    `);
  }

  html.push(`
      </div>
  `);

  return html.join('');
};

export default generateSection;
