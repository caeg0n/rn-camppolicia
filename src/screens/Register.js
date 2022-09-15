import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, BackHandler } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { DEV_API_BASE, PROD_API_BASE } from '@env'

if (__DEV__) {
  var URL_BASE = DEV_API_BASE;
} else {
  var URL_BASE = PROD_API_BASE;
}

export default function Register({ navigation }) {
  const { uuid } = useSelector((state) => state.userReducer);
  // const buttonClickedHandler = () => {};

  const backAction = () => {
    navigation.navigate("Home",{camingFromRegister:true});
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );
  
  useEffect(() => {
    
  });

  function register() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>
        PROCURE UM POLICIAL NA DELEGACIA DA PM OU EM UMA VIATURA E PEÇA PARA
        REGISTRAR O SEU APLICATIVO
      </Text>
      <QRCode value={`${uuid}`} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: "green",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    flexWrap: "wrap",
  },
});
