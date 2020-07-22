import { render } from 'mustache';

function renderAuthorName(name) {
  const html = [];

  html.push(
    render(
      `
        <div>
          <strong>Author By:</strong><div class="ml">{{given}} {{family}}</div>
        </div>
      `,
      name,
    ),
  );

  return html.join('');
}


function getAuthorType(author) {
  const html = [];

  if (author) {
    const { assignedAuthor: { assignedPerson } } = author;

    if(assignedPerson) {
      const { name } = assignedPerson;

      html.push(renderAuthorName(name));
    }
  }

  return html.join('');
}

export default function getAuthorDetails(author) {
  const html = [];

  if (Array.isArray(author)) {
    for (let i = 0; i < author.length; i += 1) {
      html.push(getAuthorType(author[i]));
    }
  } else {
    html.push(getAuthorType(author));
  }

  return html.join('');
}
