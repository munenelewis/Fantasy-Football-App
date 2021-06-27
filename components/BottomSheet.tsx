import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

import BottomSheet from "@gorhom/bottom-sheet";

type containerProps = {
  action: any;
};

const App = (props: containerProps) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => [0, "50%", "70%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    bottomSheetRef.current?.expand();
  }, []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {},
});

export default App;
