import processText from './methods/processText';

const ImportConfig = {
  compact: false,
  ignoreDeclaration: true,
  ignoreInstruction: true,
  ignoreComment: true,
  textFn: processText,
  elementsKey: 'elts',
  attributesKey: 'atts',
};

const ExportConfig = {};

export { ImportConfig, ExportConfig };
