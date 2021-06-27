import { Image, StyleSheet, Text, View } from "react-native";

import { Player } from "../types";
import React from "react";

interface PlayerItem {
  player: Player;
}

const PlayerListItem = ({ player }: PlayerItem) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://media.api-sports.io/football/players/${player.id}.png` }}
        style={styles.image}
      />

      <View style={styles.intro}>
        <Text style={styles.playerName}>{player.name}</Text>
        <Text style={styles.teamMatch}> {player.match} </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.amount}>
          KSH {((player.price / 1000000) * 105).toFixed(1)} M
        </Text>
        <Text style={styles.position}>{player.position} </Text>
      </View>

      <Text style={styles.rating}> {player.totalPoints} </Text>
    </View>
  );
};

export default PlayerListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#eeee",
  },
  image: {
      width:40,
      height:40,
      borderRadius:20,
      borderWidth:1,
      borderColor: "#ddd",
      margin:5
  },
  intro: {
    flexGrow: 1,
  },
  playerName: {
    fontWeight: "bold",
  },
  teamMatch: {},
  info: {
    marginHorizontal: 15,
    alignItems: "flex-end",
  },
  position: {},
  amount: {
    fontWeight: "bold",
  },
  rating: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
