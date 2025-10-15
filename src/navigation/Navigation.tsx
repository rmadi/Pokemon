import { NavigationContainer } from '@react-navigation/native';
import Fallback from '../components/Fallback';
import RootStack from './RootStack';


const Navigation = () => {
// 

  return (
    <NavigationContainer fallback={<Fallback />}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigation;
