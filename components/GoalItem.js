import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const GoalItem = (props) => {
  return (
    <TouchableOpacity
      //activeOpacity={0.5}
      onPress={props.onDelete.bind(this, props.id)}
      //or in App.js we can do .bind(this, props.id) to removeGoalHandler
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    // flexDirection: "row",
    //width: "80%",
    padding: 10,
    marginVertical: 3,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
