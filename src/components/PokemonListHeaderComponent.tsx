import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors, gap, size, width } from '../utils';
import { GridBtn, ListBtn } from '../utils/logos';

type Props = {
  isGrid: boolean;
 setIsGrid: (value: boolean) => void;
};
const PokemonListHeaderComponent = ({ isGrid, setIsGrid }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/pokemonTitle.png')}
        style={styles.image}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={()=>setIsGrid(false)}>
          <ListBtn
            width={30}
            height={30}
            fill={!isGrid ? colors.black : colors.grey}
          />
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>setIsGrid(true)}>
          
          <GridBtn
            width={30}
            height={30}
            fill={isGrid ? colors.black : colors.grey}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PokemonListHeaderComponent;

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  image: { width: width / 1.1, height: 120 },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: size.xxxlg,
    width: '90%',
    justifyContent: 'flex-end',
  },
  btn: { paddingHorizontal: gap },
  activebtn: {
    backgroundColor: colors.grey,
  },
});
