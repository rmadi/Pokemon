/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import Fallback from './src/components/Fallback';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AnimatedBootSplash from './src/components/AnimatedBootSplash';
import { useState } from 'react';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [visible, setVisible] = useState(true);

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
              {visible && (
                <AnimatedBootSplash onAnimationEnd={() => setVisible(false)} />
              )}
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
