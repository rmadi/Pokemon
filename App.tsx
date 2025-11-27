import React, { useEffect } from 'react';
import {
  StatusBar,
  useColorScheme,
  StyleSheet,
  Alert,
  BackHandler,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import Fallback from './src/components/Fallback';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFreeRasp } from 'freerasp-react-native';
import DeviceInfo from 'react-native-device-info';
import RootDetection from '@kamarajcalm/react-native-root-detection';
import { useProxyDetection } from './src/security/useProxyDetection';
import { useCloneDetection } from './src/security/useCloneDetection';

// We can use Sentry for crash reporting, but it is a paid solution for advanced features.
// Optional: Sentry can be added for error tracking and performance analytics,
// however its advanced capabilities come with a paid subscription.

// import * as Sentry from '@sentry/react-native';
// we can use Sentry but is pricing

// Sentry.init({
//   dsn: 'YOUR_DSN_HERE',
//   tracesSampleRate: 1.0,
//   enableAutoSessionTracking: true,
// });

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  useProxyDetection();
  useCloneDetection();

  const config = {
    androidConfig: {
      packageName: 'com.pokemon',
      certificateHashes: ['+sYXRdwJA3hvue3mKpYrOZ9zSPC7b4mbgzJmdZEDO5w='],
      supportedAlternativeStores: ['com.sec.android.app.samsungapps'],
    },
    iosConfig: {
      appBundleId: 'com.pokemon',
      appTeamId: 'YOUR_TEAM_ID',
    },
    watcherMail: 'pokmon@example.com',
    isProd: true,
  };

  function closeApp(message: string) {
    if (__DEV__) {
      console.log('message',message);
    } else {
      Alert.alert('Security Alert', message);
      setTimeout(() => BackHandler.exitApp(), 500);
    }
  }

  const actions = {
    privilegedAccess: () => closeApp('Root access detected.'),
    debug: () => closeApp('Debugger detected.'),
    simulator: () => closeApp('Emulator detected.'),
    appIntegrity: () => closeApp('App integrity compromised.'),
    unofficialStore: () => closeApp('App installed from unofficial store.'),
    hooks: () => closeApp('Hooking tool detected.'),
    deviceBinding: () => closeApp('Device binding issue detected.'),
    secureHardwareNotAvailable: () =>
      closeApp('Secure hardware not available.'),
    systemVPN: () => closeApp('System VPN detected.'),
    passcode: () => closeApp('Device has no passcode set.'),
    deviceID: () => closeApp('Invalid Device ID.'),
    obfuscationIssues: () => closeApp('Code obfuscation issues detected.'),
    devMode: () => closeApp('Developer mode detected.'),
    adbEnabled: () => closeApp('ADB is enabled.'),
    screenshot: () => closeApp('Screenshot detected.'),
    screenRecording: () => closeApp('Screen recording detected.'),
    multiInstance: () => closeApp('Multiple instance detected.'),
    started: () => console.log('freeRASP started'),
    initializationError: (error: any) =>
      console.warn('freeRASP init error:', error),
  } as any;

  useFreeRasp(config, actions);

  useEffect(() => {
    (async () => {
      try {
        const isRooted = await RootDetection.isDeviceRooted();
        const isEmulator = await DeviceInfo.isEmulator();
        if (isRooted || isEmulator) {
          Alert.alert(
            'Security Alert',
            isRooted
              ? 'Your device appears to be rooted. This app will close.'
              : 'This app cannot run on an emulator and will close.',
          );
          setTimeout(() => BackHandler.exitApp(), 500);
        }
      } catch (error) {
        console.log('🚀 ~ App ~ error:', error);
        // Sentry.captureException(error);
      }
    })();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Fallback />} persistor={persistor}>
        <GestureHandlerRootView style={styles.container}>
          <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
              <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                animated
                translucent
              />
              <Navigation />
            </SafeAreaView>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default App;

// export default Sentry.wrap(App);
