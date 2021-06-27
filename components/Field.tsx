import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import FieldImage from '../assets/images/field.jpg';
import Player from './Player';
import React from 'react';
import { myPlayersByPosition } from '../atoms/MyTeam';
import { useRecoilValue } from 'recoil';

// const players: { [key: string]: null[] } = {
//   FWD: [null, null, null],
//   MID: [null, null, null],
//   DEF: [null, null, null],
//   GKC: [null],
// };

const Field = () => {
    const players = useRecoilValue(myPlayersByPosition)
  return (
    <ImageBackground
      resizeMode="contain"
      source={FieldImage}
      style={styles.field}
    >
      {Object.keys(players).map((position ,index) => (
        <View key={index} style={styles.PlayersContainer}>
          {players[position].map((player, index) => (
            <Player player={player} position={position} key={index} />
          ))}
        </View>
      ))}
    </ImageBackground>
  );
};

export default Field;

const styles = StyleSheet.create({
  field: {
    width: "100%",
    aspectRatio: 2 / 3,
    justifyContent: "space-around",
    alignItems: "center",
  },
  PlayersContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
