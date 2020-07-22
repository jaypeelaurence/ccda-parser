import { entryType } from '../entries';
import getAuthorDetails from '../getAuthorDetails';

export default function getObservation(observation) {
  const html = [];

  html.push(`
    <div>
  `);

  const { author } = observation;

  html.push(entryType(observation));

  html.push(getAuthorDetails(author))

  html.push(`
    </div>
  `);

  return html.join('');
}
