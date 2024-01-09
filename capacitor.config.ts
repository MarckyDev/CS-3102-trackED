import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.testingulet',
  appName: 'testingulet',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: 'f073c2a9',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
