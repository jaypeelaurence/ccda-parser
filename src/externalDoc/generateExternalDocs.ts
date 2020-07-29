import convert from 'xml-js';
import { ImportConfig } from './config';
import { generateHeader, generateComponent, style } from './template';

const generateExternalDocs = async xmlFile => {
  const file = JSON.parse(convert.xml2json(xmlFile, ImportConfig));

  const clinicalDoc = file.elts.find(elt => elt.name === 'ClinicalDocument');

  const html = [];

  if (clinicalDoc) {
    html.push('<div class="externalDoc">');

    const component = clinicalDoc.elts.find(elt => elt.name === 'component');

    const headElts = [
      'title',
      'recordTarget',
      'author',
      'documentationOf'
    ];

    const header = clinicalDoc.elts.filter(elt => headElts.includes(elt.name));

    if (header.length) {
      html.push(await generateHeader(header));
    }

    if (component) {
      const structuredBody = component.elts
        .find(elt => elt.name === 'structuredBody').elts
        .filter(elt => elt.name === 'component');

      if (structuredBody.length) {
        html.push(await generateComponent(structuredBody));
      }
    }

    html.push('</div>');
    html.push(style);
  }

  return html.join('');
};

export default generateExternalDocs;
