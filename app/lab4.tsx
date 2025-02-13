import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import vacationDestinations from "../constants/list_items";

const Lab4 = () => {
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedDestinations((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
      <FlatList
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.destinationItem}
            onPress={() => toggleSelection(item.id)}
          >
            <Text style={styles.destinationText}>
              {item.location} - ${item.price} - {item.average_yearly_temperature}
            </Text>
            {selectedDestinations.includes(item.id) && <Text style={styles.checkmark}>{"\u2705"}</Text>}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  destinationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  destinationText: {
    fontSize: 16,
  },
  checkmark: {
    fontSize: 20,
  },
});

export default Lab4;
