import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import React, { Suspense, useRef } from "react";

import BottomSheet from "@gorhom/bottom-sheet";
import Field from "../components/Field";
import Filters from "../components/Filters";
import PlayerList from "../components/PlayerList";
import TeamStats from "../components/TeamStats";

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
          style={[styles.Players, { marginTop: 10 }]}
        >
          <Text style={styles.viewPlayers}>Filters </Text>
        </Pressable>
        <Suspense fallback={<Text>Loading</Text>}>
          <PlayerList />
        </Suspense>
      </BottomSheet>

      <BottomSheet
        ref={filterButtonSheet}
        index={0}
        snapPoints={snapPoints}
        style={styles.filters}
      >
        <Filters />
      </BottomSheet>
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
