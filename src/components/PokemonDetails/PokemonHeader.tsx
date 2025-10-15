

import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';
import { colors, height, horizontalScale, size } from '../../utils';

type Props = {
  item: {
    bgColor: string;
    imageUri: string;
    soundUri?: string;
  };
};

const PokemonHeader = ({ item }: Props) => {
  const playedOnceRef = useRef(false);

  useEffect(() => {
    Sound.setCategory('Playback');
  }, []);

  const onImageLoaded = () => {
    if (!item.soundUri || playedOnceRef.current) return;
    const s = new Sound(item.soundUri, undefined, err => {
      if (err) return;
      s.play(() => s.release());
      playedOnceRef.current = true;
    });
  };

  return (
    <View style={[styles.header, { backgroundColor: item.bgColor }]}>
      <View style={styles.artworkWrap}>
        <Image
          source={{ uri: item.imageUri }}
          style={styles.artwork}
          resizeMode="contain"
          onLoadEnd={onImageLoaded}
        />
      </View>
    </View>
  );
};

export default React.memo(PokemonHeader);

const styles = StyleSheet.create({
  header: {
    height: height / 6,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'visible',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  artworkWrap: {
    position: 'absolute',
    bottom: -90,
    alignSelf: 'center',
    zIndex: 2,
    elevation: 6,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
  },
  artwork: {
    width: horizontalScale(size.xxxlg * 6), 
    height: horizontalScale(size.xxxlg * 6),
  },
});