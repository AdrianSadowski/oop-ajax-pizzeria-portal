export const api = {
  url: '//' + window.location.hostname + (window.location.hostname==='localhost' ? ':3131' : ''),
  tables: 'tables',
  products: 'products',
  order: 'order',
  booking: 'booking',
  event: 'event',
  dataStartParamKey: 'date_gte',
  dateEndParamkey: 'date_lte',
  notRepearParam: 'repeat=false',
  repeatParam: 'repeat_ne=false',
};