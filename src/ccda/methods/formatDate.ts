import moment from 'moment';

const defaultExtDocFormat = 'YYYYMMDDHHmmss';
const format = 'YYYY-MM-DD HH:mm:ss'

export default function formatDate(date) {
  return moment(date, defaultExtDocFormat).format(format);
}
