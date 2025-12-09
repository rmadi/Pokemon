import { NavigationContainer } from '@react-navigation/native';
import Fallback from '../components/Fallback';
import RootStack from './RootStack';
import BootSplash from "react-native-bootsplash";

const Navigation = () => {
  return (
    <NavigationContainer    fallback={<Fallback /> }>
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigation;
