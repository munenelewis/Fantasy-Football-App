import { StyleSheet, Text, View } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

interface PlayerProps  {
    player:any,
    position:string
}
export default function Player(props : PlayerProps) {
  return (
    <View style={styles.PlayerView}>
      <FontAwesome5
        name="tshirt"
        size={35}
        color={props.player ? "#d178db" : "#5c5c5cbb"}
      />
      <Text style={styles.playerName}> {props.position} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  PlayerView: {
    alignItems: "center",
  },
  playerName: {
    backgroundColor: "#333333bb",
    color: "whitesmoke",
    fontWeight: "bold",
    padding: 2,
    fontSize: 12,
    paddingHorizontal: 7,
  },
});
