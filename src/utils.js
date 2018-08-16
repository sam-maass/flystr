import moment from 'moment';

export function getDurationString({ fromDuration, toDuration }) {
  if (toDuration && fromDuration) return `${fromDuration} - ${toDuration} days`;
  if (fromDuration) return `${fromDuration} days`;
  return `any number of days`;
}

export function getTimeframeString({ endDate, startDate }) {
  const startMoment = moment(startDate);
  const endMoment = moment(endDate);
  const endsInSameYear = startMoment.isSame(endMoment, 'year');
  const endsInSameMonth = startMoment.isSame(endMoment, 'month');
  const defaultFormat = 'MMM YYYY';
  const startDateFormat = endsInSameYear ? 'MMM' : defaultFormat;
  const formattedStart = startMoment.format(startDateFormat);
  const formattedEnd = endMoment.format(defaultFormat);
  if (endsInSameMonth && endsInSameYear) {
    return `${formattedEnd}`;
  } else {
    return `${formattedStart}-${formattedEnd}`;
  }
}
