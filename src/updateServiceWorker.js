export const updateServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const reg =
        (await navigator.serviceWorker.getRegistration('/')) ||
        (await navigator.serviceWorker.register('custom-service-worker.js'));
      reg && reg.update();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
};
