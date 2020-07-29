import { generateSection } from '../template';

export default async function generateComponent(component) {
  const html = [];

  html.push('<div class="componentBody">');

  component.forEach(comp => {
    const section = comp.elts.find(com => com.name === 'section');

    const secElts = ['text', 'entry', 'title'];

    if (section) {
      const sections = section.elts.filter(sect => secElts.includes(sect.name));

      html.push(generateSection(sections));
    }
  });

  html.push('</div>');

  return html.join('');
};
