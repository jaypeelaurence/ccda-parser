import { entryType } from './entries';

const generateEntry = async section => {
  const html = [];

  html.push(await entryType(section));

  return html.join('');
};

export default generateEntry;
