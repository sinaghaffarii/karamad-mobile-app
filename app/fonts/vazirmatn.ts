import localFont from 'next/font/local';

export const vazirmatn = localFont({
  src: [
    { path: './Vazirmatn-UI-FD-NL-Light.woff2', weight: '300', style: 'normal' },
    { path: './Vazirmatn-UI-FD-NL-Regular.woff2', weight: '400', style: 'normal' },
    { path: './Vazirmatn-UI-FD-NL-Medium.woff2', weight: '500', style: 'normal' },
    { path: './Vazirmatn-UI-FD-NL-SemiBold.woff2', weight: '600', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-vazirmatn',
});
