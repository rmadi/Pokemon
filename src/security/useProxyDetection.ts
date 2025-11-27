import { useEffect } from 'react';
import { NativeModules, Alert, BackHandler } from 'react-native';

const { ProxyDetect } = NativeModules;

export function useProxyDetection() {
  useEffect(() => {
    const checkProxy = async () => {
      try {
        const enabled = await ProxyDetect.isProxyEnabled();

        if (enabled) {
          Alert.alert(
            "Security Alert",
            "A network proxy has been detected. The app will close for security reasons."
          );
          return setTimeout(() => BackHandler.exitApp(), 500);
        }

      } catch (error) {
        console.log("Proxy check error:", error);
      }
    };

    checkProxy();
  }, []);
}
