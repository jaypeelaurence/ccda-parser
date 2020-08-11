import { generateSection } from '../template';

export default async function generateComponent(component) {
  const html = [];

  html.push('<div class="componentBody">');
  html.push('<div>');

  component.forEach(comp => {
    const section = comp.elts.find(e => e.name === 'section');

    const secElts = ['text', 'entry', 'title'];

    if (section) {
      const sections = section.elts.filter(e => secElts.includes(e.name));

      html.push(generateSection(sections));
    }
  });

  html.push('</div>');
  html.push('</div>');

  return html.join('');
}
