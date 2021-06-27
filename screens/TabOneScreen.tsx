import * as React from "react";

import { SafeAreaView, StyleSheet } from "react-native";

import Field from "../components/Field";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Field />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  
});
