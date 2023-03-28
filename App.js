import React, { useState, useEffect } from "react";
// import AppLoading  from "expo-app-loading";
// import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";

import * as Font from "expo-font";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Alert,
} from "react-native";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//   });
// };

export default App = () => {
  const [isReady, setIsReady] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadFonts}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/photoBG.jpg")}
        >
          <RegistrationScreen
            isShowKeyboard={isShowKeyboard}
            setIsShowKeyboard={setIsShowKeyboard}
            dimensions={dimensions}
          />
          {/* <LoginScreen
            isShowKeyboard={isShowKeyboard}
            setIsShowKeyboard={setIsShowKeyboard}
            dimensions={dimensions}
          /> */}
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
});
