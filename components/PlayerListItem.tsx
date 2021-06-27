import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MyFormationState, myPlayersState } from "../atoms/MyTeam";
import { useRecoilState, useRecoilValue } from "recoil";

import { Player } from "../types";
import React from "react";

interface PlayerItem {
  player: Player;
}

const PlayerListItem = ({ player }: PlayerItem) => {
  const [myPlayers, setMyPlayers] = useRecoilState(myPlayersState);
  const myFormation = useRecoilValue(MyFormationState);

  const numberOfPlayersOnPosition = myPlayers.filter(
    (p) => p.position === player.position
  ).length;

  const onPress = () => {
    setMyPlayers((currentPlayers) => {
      if (myPlayers.some((p) => p.id === player.id)) {
        return currentPlayers.filter((p) => p.id !== player.id);
      } else {
        if (numberOfPlayersOnPosition < myFormation[player.position]){
            return [...currentPlayers, player];
        }else{
            return currentPlayers
        }
          
      }
    });
  };

  const isSelected = myPlayers.some((p) => p.id === player.id);
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: isSelected ? "#d170bd" : "whitesmoke" },
      ]}
    >
      <Image
        source={{
          uri: `https://media.api-sports.io/football/players/${player.id}.png`,
        }}
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

      <Text style={styles.rating}> 10 </Text>
    </Pressable>
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
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 5,
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
