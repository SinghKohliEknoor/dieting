import React, { useState } from "react";
import IncrementButton from "../components/increment";
import DecrementButton from "../components/decrement";
import { StyleSheet,View,Text } from "react-native";

const Lab_3: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>My Value: {counter}</Text> 
      <View style={styles.buttonContainer}>
        <IncrementButton increment={increment} />
        <DecrementButton decrement={decrement} />
      </View>
    </View>
  );
};

export default Lab_3;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    counterText: {
      fontSize: 24,
      fontWeight: "bold",
    },
    buttonContainer: {
      flexDirection: "row",
      marginTop: 20,
      gap: 10,
    },
  });