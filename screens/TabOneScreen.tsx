import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import React, { useCallback, useMemo, useRef } from "react";

import Field from "../components/Field";
import PlayerListItem from "../components/PlayerListItem";
import TeamStats from "../components/TeamStats";
import { View } from "react-native";
import { players } from "../assets/data/players";

export default function TabOneScreen() {
  const viewPlayers = () => {
    bottomSheetRef.current?.expand();
  };
  // variables
  const bottomSheetRef = useRef<BottomSheet>(null);
  const filterButtonSheet = useRef<BottomSheet>(null);

  // variables
  const snapPoints = [0, "50%"];

  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />
      <Field />
      <Pressable onPress={viewPlayers} style={styles.Players}>
        <Text style={styles.viewPlayers}>view Players </Text>
      </Pressable>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={() => viewPlayers}
      >
        <Pressable
          onPress={() => filterButtonSheet.current?.expand()}
          style={styles.Players}
        >
          <Text style={styles.viewPlayers}>Filters </Text>
        </Pressable>
        <BottomSheetFlatList
          data={players}
          renderItem={({ item }) => <PlayerListItem player={item} />}
          keyExtractor={(item) => item.id}
        />
      </BottomSheet>

      <BottomSheet
        ref={filterButtonSheet}
        index={0}
        snapPoints={snapPoints}
        style={styles.filters}
      ></BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#72CC5E",
  },
  viewPlayers: {},
  Players: {
    backgroundColor: "orange",
    width: "90%",
    margin: 20,
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginTop: "auto",
  },
  contentContainer: {},
  filters: {},
});
