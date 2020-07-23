import { generateSection } from '../template';

const generateComponent = async component => {
  const html = [];

  html.push(`
      <div class="componentBody">
  `);

  let section;

  if (Array.isArray(component)) {
    for (let i = 0; i < component.length; i += 1) {
      section = await generateSection(component[i].section); // eslint-disable-line no-await-in-loop
    
      html.push(section);
    }
  } else {
    section = await generateSection(component.section);
    
    html.push(section);
  }

  html.push(`
      </div>
  `);

  return html.join('');
};

export default generateComponent;
