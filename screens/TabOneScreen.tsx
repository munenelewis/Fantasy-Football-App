import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";

import BottomSheet from "@gorhom/bottom-sheet";
import Field from "../components/Field";
import TeamStats from "../components/TeamStats";
import { View } from "react-native";

export default function TabOneScreen() {

  const viewPlayers = () => {
    bottomSheetRef.current?.expand();
  };
  // variables
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = [0, "50%", '75%'];


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
        onChange={viewPlayers()}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
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
});
