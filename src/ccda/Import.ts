import { Parser } from 'xml2js';
import { ImportConfig } from './config';
import { generateHeader, generateSection } from './template';

const Import = async xmlFile => {
  const file = await Parser({ ...ImportConfig }).parseStringPromise(xmlFile);

  const outputHtml = [];

  const {
    title,
    recordTarget,
    author,
    component: {
      structuredBody: { component },
    },
  } = file;

  const header = await generateHeader({ title, recordTarget, author });
  const section = await generateSection(component);

  outputHtml.push(`
    <div>
  `);

  outputHtml.push(header);

  outputHtml.push(section);

  outputHtml.push(`
    </div>
  `);

  return outputHtml.join('');
};

export default Import;
