import convert from 'xml-js';
import { ImportConfig } from './config';
import { generateHeader, generateComponent, style, script } from './template';

const generateExternalDocs = async xmlFile => {
  const file = JSON.parse(convert.xml2json(xmlFile, ImportConfig));

  const clinicalDoc = file.elts.find(e => e.name === 'ClinicalDocument');

  const html = [];
  if (clinicalDoc) {
    html.push('<div class="externalDoc"><div class="docWrapper">');

    const component = clinicalDoc.elts.find(e => e.name === 'component');

    const headElts = ['title', 'recordTarget', 'author', 'documentationOf'];

    const header = clinicalDoc.elts.filter(e => headElts.includes(e.name));

    if (header.length) {
      html.push(await generateHeader(header));
    }

    if (component) {
      const structuredBody = component.elts
        .find(e => e.name === 'structuredBody')
        .elts.filter(e => e.name === 'component');

      if (structuredBody.length) {
        html.push(await generateComponent(structuredBody));
      }
    }

    html.push('</div></div>');
    html.push(style);
    html.push(script);
  }

  return html.join('');
};

export default generateExternalDocs;
