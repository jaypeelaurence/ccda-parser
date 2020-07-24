import processText from './methods/processText';

const ImportConfig = {
  compact: true,
  spaces: 4,
  ignoreDeclaration: true,
  ignoreInstruction: true,
  ignoreComment: true,
  trim: true,
  textFn: processText,
  alwaysChildren: true,
};

const ExportConfig = {};

const defaultId = '2.16.840.1.113883.10.20.22.1.1';

export { ImportConfig, ExportConfig, defaultId };
