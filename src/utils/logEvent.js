export const logEvent = ({ category, label, type }) => () => {
  window.gtag('event', type, {
    event_category: category,
    event_label: label,
    transport_type: 'beacon'
  });
};
