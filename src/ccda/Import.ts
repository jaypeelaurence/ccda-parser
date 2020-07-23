import { Parser } from 'xml2js';
import convert from 'xml-js';
import { ImportConfig } from './config';
import { generateHeader, generateComponent } from './template';

const Import = async xmlFile => {
  const file = JSON.parse(convert.xml2json(xmlFile, ImportConfig));

  const outputHtml = [];

  const {
    ClinicalDocument: {
      title,
      recordTarget,
      author,
      component,
    }
  } = file;

  const header = await generateHeader({ title, recordTarget, author });
  let body;

  const { structuredBody, nonXMLBody } = component;

  if (structuredBody) {
    body = await generateComponent(structuredBody.component);
  }

  outputHtml.push(`
    <div>
  `);

  outputHtml.push(header);

  outputHtml.push(body);

  outputHtml.push(`
    </div>
  `);

  return outputHtml.join('');
};

export default Import;
