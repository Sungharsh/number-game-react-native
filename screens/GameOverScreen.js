import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "./../components/BodyText";
import TitleText from "./../components/TitleText";
//import { Colors } from "../constants/colors";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is over!</TitleText>
        <Image
          source={require("../assets/success.png")}
          // source={{
          //   uri:
          //     "https://cdn.pixabay.com/photo/2019/01/22/18/30/summit-3948706_960_720.jpg",
          // }}
          style={styles.imageContainer}
          resizeMode="cover"
        />
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            You have taken
            <Text style={styles.highlight}> {props.roundsNumber} </Text>
            rounds to guess the openant's number:
            <Text style={styles.highlight}> {props.userNumber} </Text>
          </BodyText>
        </View>
        <MainButton onPress={props.reStartGame}>START NEW </MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    //marginTop: 20,
    alignItems: "center",
  },
  imageContainer: {
    //width: 200,
    //height: 200,
    width: Dimensions.get("window").width * 0.5, //50% of avaialbe space
    height: Dimensions.get("window").width * 0.5,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    //borderRadius: 300,
    borderWidth: 3,
    borderColor: "black",
    //marginVertical: 15,
    marginVertical: Dimensions.get("window").height / 40,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 20,
    //marginVertical: 15,
    marginVertical: Dimensions.get("window").height / 40,
  },
  resultText: {
    textAlign: "center",
    //fontSize: 20,
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  // text: {
  //   fontSize: 32,
  //   fontWeight: "bold",
  // },
});
export default GameOverScreen;
