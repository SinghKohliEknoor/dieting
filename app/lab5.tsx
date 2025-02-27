import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CallAPI from "../components/CallAPI";

const Lab5 = () => {
  const [showAPIComponent, setShowAPIComponent] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab 5 - API Call using useEffect</Text>
      <Button
        title={showAPIComponent ? "Hide API Data" : "Show API Data"}
        onPress={() => setShowAPIComponent((prev) => !prev)}
      />
      {showAPIComponent && <CallAPI />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
});

export default Lab5;
