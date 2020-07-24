import { render } from 'mustache';
import formatDate from '../../methods/formatDate';

function renderAuthorName(name) {
  const html = [];

  html.push(
    render(
      `
        <strong>Author By</strong>:{{given._text}} {{family._text}}
      `,
      name,
    ),
  );

  return html.join('');
}

function renderDate(time) {
  const html = [];

  let attrTime = '';

  if(time._attributes.value) {
    attrTime = formatDate(time._attributes.value);
  }

  html.push(`
        <strong>Time</strong>: ${attrTime}
  `);

  return html.join('');
}

function getAuthorType(author) {
  const html = [];

  if (author) {
    const {
      assignedAuthor: { assignedPerson },
      time
    } = author;

    if (assignedPerson) {
      const { name } = assignedPerson;

      html.push(renderAuthorName(name));
    }

    if (time) {
      html.push(renderDate(time));
    }
  }

  return html.join('');
}

export default function getAuthor(author) {
  const html = [];

  html.push(`
    <div class="authorDetails">
  `);

  if (Array.isArray(author)) {
    for (let i = 0; i < author.length; i += 1) {
      html.push(getAuthorType(author[i]));
    }
  } else {
    html.push(getAuthorType(author));
  }

  html.push(`
    </div>
  `);

  return html.join('');
}
