import { useEffect, useState } from 'react';
import { View, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import BootSplash from 'react-native-bootsplash';
import { height, width } from '../utils';

type Props = {
  onAnimationEnd: () => void;
};
const AnimatedBootSplash = ({ onAnimationEnd }: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));

  const { container } = BootSplash.useHideAnimation({
    manifest: require('../../assets/bootsplash/manifest.json'),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

   animate: () => {
  Animated.timing(opacity, {
    useNativeDriver: true,
    toValue: 0,
    duration: 2000,
  }).start(() => {
    onAnimationEnd();
  });
},
  });

  return (
    <Animated.View {...container} style={[container.style, { opacity }]}>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <LottieView
          source={require('../../assets/bootsplash/Pikachu.json')}
          autoPlay
          loop={false}
          onAnimationFinish={() => {
            // ✅ Now we fade out AND remove native splash
            Animated.timing(opacity, {
              useNativeDriver: true,
              toValue: 0,
              duration: 100,
            }).start(() => {
              onAnimationEnd(); // remove component
            });
          }}
          style={{ width: width, height: height, alignSelf: 'center' }}
        />
      </View>
    </Animated.View>
  );
};

export default AnimatedBootSplash;
