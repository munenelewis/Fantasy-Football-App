import { StyleSheet, Text, View } from "react-native";
import { noOfPlayers, totalValue } from "../atoms/MyTeam";

import React from "react";
import { useRecoilValue } from "recoil";

const TeamStats = () => {
  const nofPlayers = useRecoilValue(noOfPlayers);
  const stats = useRecoilValue(totalValue);
  return (
    <View style={styles.container}>
      <View style={styles.Labels}>
        <Text style={styles.label}>players</Text>
        <Text style={styles.value}>{nofPlayers}/ 15</Text>
      </View>

      <View style={styles.Values}>
        <Text style={styles.label}>Remaing</Text>
        <Text style={styles.value}>
          ksh {((1_000_000_000_00- Number(stats)) / 1_000_000).toFixed(1)}M
        </Text>
      </View>
    </View>
  );
};

export default TeamStats;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    width: "90%",
    borderWidth: 4,
    borderColor: "#38abd1",
    borderRadius: 5,
    flexDirection: "row",
    padding: 10,
  },
  label: {
    color: "#333",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
  },
  Labels: {
    marginRight: 25,
  },
  Values: {},
});
