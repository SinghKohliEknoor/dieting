import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const CallAPI = () => {
  const [data, setData] = useState<any>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {  (
        <View style={styles.card}>
          <Text>ID: {data.id}</Text>  
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.body}>{data.body}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  body: {
    fontSize: 16,
    color: "#333",
  },
  error: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});

export default CallAPI;
