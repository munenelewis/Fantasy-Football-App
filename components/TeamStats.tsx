import { StyleSheet, Text, View } from "react-native";

import React from "react";

const TeamStats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Labels}>
        <Text style={styles.label}>players</Text>
        <Text style={styles.value}>0/ 15</Text>
      </View>

      <View style={styles.Values}>
        <Text style={styles.label}>Remaing</Text>
        <Text style={styles.value}>ksh 10M</Text>
      </View>
    </View>
  );
};

export default TeamStats;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    width: "90%",
    borderWidth:4,
    borderColor:'#38abd1',
    borderRadius:5,
    flexDirection:"row",
    padding:10

  },
  label: {
      color:'#333'
  },
  value: {
      fontSize:18,
      fontWeight:'bold',
  },
  Labels: {
      marginRight:25
  },
  Values: {},
});
