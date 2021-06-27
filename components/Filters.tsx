import { Pressable, StyleSheet, Text, View } from "react-native";

import React from "react";
import { positionFilterState } from "../atoms/Players";
import { useRecoilState } from "recoil";

const position = ["FWD", "MID", "DEF", "GCK"];

const Filters = () => {
  const [positionFilter, setPositionFilter] =
    useRecoilState(positionFilterState);

  const onFilterPress = (position: string) => {
    setPositionFilter((curPositionFilter) => {
      if (curPositionFilter.includes(position)) {
        return curPositionFilter.filter((pos) => pos !== position);
      } else {
        return [...curPositionFilter, position];
      }
    });
  };

  const isSelected = (position: string) => {
    return positionFilter.includes(position);
  };
  return (
    <View style={styles.container}>
      {position.map((position, index) => (
        <Pressable
          onPress={() => onFilterPress(position)}
          style={[
            styles.filterContainer,
            { backgroundColor: isSelected(position) ? "purple" : "#ddd" },
          ]}
          key={index}
        >
          <Text style={styles.text}>{position}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  text: {
    fontWeight: "bold",
  },
  filterContainer: {
    backgroundColor: "#ddd",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
