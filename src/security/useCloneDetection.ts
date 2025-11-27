import { useEffect } from "react";
import { NativeModules, Alert, BackHandler } from "react-native";

const { CloneDetection } = NativeModules;

export function useCloneDetection() {
  useEffect(() => {
    const checkClone = async () => {
      try {
        const cloned = await CloneDetection.isClonedApp();
        if (cloned) {
          Alert.alert(
            "Security Alert",
            "This app cannot run in cloned or virtual environments."
          );
          setTimeout(() => BackHandler.exitApp(), 500);
        }
      } catch (e) {
        console.log("Clone detection error:", e);
      }
    };

    checkClone();
  }, []);
}
