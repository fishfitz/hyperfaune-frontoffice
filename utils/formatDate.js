import Vue from 'vue';

function sameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}

export default function (start, end) {
  if (typeof start === 'string') start = new Date(start);
  if (typeof end === 'string') end = new Date(end);

  if (sameDay(start, end)) return `${Vue.i18nInstance.d(start, 'noYear')} ➡ ${Vue.i18nInstance.d(end, 'hour')}`;
  return `${Vue.i18nInstance.d(start, 'noYear')} ➡ ${Vue.i18nInstance.d(end, 'noYear')}`;
}
