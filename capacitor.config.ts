import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.newlifeozamiz.church',
  appName: 'New Life Ozamiz',
  webDir: 'web',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
};

export default config;
