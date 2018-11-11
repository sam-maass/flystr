export async function getActiveSubscription() {
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register(
        'custom-service-worker.js'
      );
      const sub = await reg.pushManager.getSubscription();
      return sub;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
}
async function subscribeUser() {
  const vapidPublicKey =
    'BFT1aIdM17CyZqwxBeZH3q3wA4kuoIp80XNjd6hpQPhwZtXyQq8C4CHcI40MqzRC3ThIVPDtKcRCLeVKWWOexcs';
  const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: convertedVapidKey
      });
      return sub;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
}
export async function requestSubscription() {
  if (Notification.permission === 'blocked')
    // eslint-disable-next-line no-console
    console.error('Notifications are blocked by the user');
  const permissionStatus = await Notification.requestPermission();
  switch (permissionStatus) {
    case 'granted':
      return await subscribeUser();
    case 'blocked':
      // eslint-disable-next-line no-console
      console.error('Notifications are blocked by the user');
      break;
    default:
      break;
  }
}

const urlBase64ToUint8Array = base64String => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};
