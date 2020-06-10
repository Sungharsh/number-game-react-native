import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
//import BodyText from "../components/BodyText";
import Colors from "../constants/colors";
import NumberContainer from "./../components/NumberContainer";
import BodyText from "./../components/BodyText";
import TitleText from "./../components/TitleText";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  }, [Dimensions]);

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g), "");
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setSelectedNumber(parseInt(enteredValue));
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0) {
      Alert.alert("Invalid!", "Enter two digit numbers between 1 and 99.", [
        { text: "X", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(choosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.outputContiner}>
        <Text>Selected Number: </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView keyboardShouldPersistTaps="true">
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={20}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <TitleText style={styles.title}>Start a New Game!</TitleText>
            <Card style={styles.inputContiner}>
              <BodyText>Select a Number</BodyText>
              {/* <TextInput /> */}
              <Input
                style={styles.inputfield}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                // keyboardType="number-pad"
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles.buttonContainer}>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Reset"
                    onPress={resetInputHandler}
                    color={Colors.accent}
                  />
                </View>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Confirm"
                    onPress={confirmInputHandler}
                    color={Colors.primary}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    //backgroundColor: "#92a8d1",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  // btn: {
  //   //width: "45%",
  //   borderWidth: 1,
  //   borderColor: "black",
  //   width: Dimensions.get("window").width / 3,
  // },
  title: {
    //fontSize: 20,
    marginVertical: 10,
    //fontFamily: "open-sans-bold",
  },
  inputContiner: {
    //width: 300,
    width: "80%",
    //maxWidth: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 3 },
    // shadowRadius: 6,
    // shadowOpacity: 0.26,
    // backgroundColor: "white",
    // paddingVertical: 10,
    // elevation: 8, //for android shadow
    // borderRadius: 10,
  },
  inputfield: {
    width: "15%",
    textAlign: "center",
    marginVertical: 10,
  },
  outputContiner: {
    marginTop: 20,
    padding: 15,
    alignItems: "center",
  },
});

export default StartGameScreen;
