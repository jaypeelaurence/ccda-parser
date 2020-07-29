import { render } from 'mustache';
import { formatDate } from '../../methods/formatDate';
import { styleInheritance } from '../../template';

let parent = '';
let children = '';

function renderDate(time) {
  const html = [];

  const attrTime = formatDate(time);

  html.push(`<div class="${children}"><div class="label nonLabel">Authored On:</div>`);
  html.push(`<div class="value">${attrTime}</div>`);
  html.push('</div>');

  return html.join('');
}

function renderAuthorOrg(org) {
  const html = [];

  // html.push(`
  //       <div class="${parent}">
  //         <div class="label">
  //           Author:
  //         </div>
  // `);

  // html.push(
  //   render(
  //     `
  //         <div class="${children}">
  //           <div class="${[children, 'value'].join(' ')}">
  //             {{manufacturerModelName._text}} - {{name._text}} 
  //           </div>
  //     `,
  //     org,
  //   ),
  // );

  // html.push(`
  //           ${renderDate(org.time)}
  //         </div>
  //       </div>
  // `);

  return html.join('');
}

function renderAuthorName(name) {
  const html = [];

  const { elts, time } = name;

  html.push(`<div class="${parent}"><div class="label">Author:</div>`);

  html.push(`<div class="${children}">`);

  if (elts) {
    let given = elts.find(elt => elt.name === 'given');
    given = given.elts.find(elt => elt.type === 'text');
    let family = elts.find(elt => elt.name === 'family');
    family = family.elts.find(elt => elt.type === 'text');

    html.push('<div class="value">');
    html.push(`${render(`{{text}}`, given)} ${render(`{{text}}`, family)}`);
    html.push('</div>');
  }

  if (time && time.atts && time.atts.value) {
    html.push(`${renderDate(time.atts.value)}`);
  }

  html.push('</div>');
  html.push('</div>');

  return html.join('');
}

function getAuthorType(author) {
  const html = [];

  if (author) {
    const assignedAuthor = author.find(elt => elt.name === 'assignedAuthor');
    const time = author.find(elt => elt.name === 'time');

    const assignedPerson = assignedAuthor.elts.find(elt => elt.name === 'assignedPerson');
    const assignedAuthoringDevice = assignedAuthor.elts.find(elt => elt.name === 'assignedAuthoringDevice');
    const representedOrganization = assignedAuthor.elts.find(elt => elt.name === 'representedOrganization');

    if (assignedPerson) {
      const name = assignedPerson.elts.find(elt => elt.name === 'name');

      html.push(renderAuthorName({ ...name, time }));
    }

    if (assignedAuthoringDevice && representedOrganization) {
      console.log("GET AUTHOR")
      // html.push(
      //   renderAuthorOrg({
      //     ...assignedAuthoringDevice,
      //     ...representedOrganization,
      //     time,
      //   }),
      // );
    }
  }

  return html.join('');
}

export default function getAuthor(author, style?: styleInheritance) {
  if (style) {
    if (style.parent) {
      parent = style.parent;
    }

    if (style.children) {
      children = style.children;
    }
  }

  const html = [];

  html.push(`<div class="${['authorDetails', parent].join(' ')}">`);
  html.push(getAuthorType(author));
  html.push('</div>');

  return html.join('');
}
