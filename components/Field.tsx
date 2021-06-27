import { ImageBackground, StyleSheet, Text, View } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import FieldImage from "../assets/images/field.jpg";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const players: { [key: string]: null[] } = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null],
  GKC: [null],
};

const Field = () => {
  return (
    <ImageBackground
      resizeMode="contain"
      source={FieldImage}
      style={styles.field}
    >
      {Object.keys(players).map((position) => (
        <View style={styles.PlayersContainer}>
          {players[position].map((player) => (
            <View style={styles.PlayerView}>
              <FontAwesome5
                name="tshirt"
                size={35}
                color={player ? "#d178db" : "#5c5c5cbb"}
              />
              <Text style={styles.playerName}> {position} </Text>
            </View>
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
