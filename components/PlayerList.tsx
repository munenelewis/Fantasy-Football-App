import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { StyleSheet, Text, View } from "react-native";
import { allPlayersState, filteredPlayers } from "../atoms/Players";
import { useRecoilState, useRecoilValue } from "recoil";

import PlayerListItem from "./PlayerListItem";
import React from "react";

const PlayerList = () => {
    // const [players, setPlayers] = useRecoilState(allPlayersState)
    const players = useRecoilValue(filteredPlayers)

  return (
    <BottomSheetFlatList
      data={players}
      renderItem={({ item }) => <PlayerListItem player={item} />}
    />
  );
};

export default PlayerList;

const styles = StyleSheet.create({});
