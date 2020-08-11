import moment from 'moment';

const defaultExtDocFormat = 'YYYYMMDDHHmmss';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatDate(date) {
  const newDate = new Date(moment(date, defaultExtDocFormat).toISOString());

  const day = newDate.getDate();
  const monthIndex = newDate.getMonth();
  const year = newDate.getFullYear();

  let hours = newDate.getHours() % 12;

  if (!hours) {
    hours = 12;
  }

  const minutes = newDate.getMinutes();

  const ampm = hours <= 12 ? 'am' : 'pm';
  const time = hours + ':' + String(minutes).padStart(2, '0') + ampm;

  return `${monthNames[monthIndex]} ${day}, ${year}, ${time}`;
}

function formatJsDate(date) {
  const newDate = new Date(moment(date, defaultExtDocFormat).toISOString());

  return newDate;
}

export { formatDate, formatJsDate };
