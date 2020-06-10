import React from "react";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import Colors from "../constants/colors";
import TitleText from "./TitleText";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    //height: 90,
    height: (Dimensions.get("window").width * 0.7) / 4,
    paddingTop: 26,
    //backgroundColor: Colors.primary,
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
  },
  headerTitle: {
    //fontFamily: "open-sans-bold",
    //color: "black",
    //fontSize: 18,
    color: Platform.OS === "ios" ? Colors.primary : "white",
  },
});
