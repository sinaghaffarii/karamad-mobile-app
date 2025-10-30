'use client';

import { useEffect } from 'react';

export function RegisterSW() {
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      console.log('PWA can be installed');
    };

    const handleAppInstalled = () => {
      console.log('PWA was installed successfully');
    };

    const registerSW = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered: ', registration);

          // Add installation event listeners
          window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
          window.addEventListener('appinstalled', handleAppInstalled);
        } catch (error) {
          console.error('Service Worker registration failed: ', error);
        }
      }
    };

    // Register service worker when the component mounts
    registerSW();

    // Cleanup event listeners
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  return null;
}
