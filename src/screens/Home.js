import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { v4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { setUUID, getIsRegistered } from "../redux/actions";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home({ navigation }) {
  const { uuid,is_registered } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  let isRegistered = is_registered.is_registered;

  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getIsRegistered(uuid));
      isRegistered = is_registered.is_registered;
    }, [])
  );

  useEffect(() => {
    // limpa asyncstorage
    //const clearData = async () => {
    //   await AsyncStorage.clear()
    // };
    // clearData().catch(console.error);
    const newUuid = v4();
    if (uuid.length < 1) {
      dispatch(setUUID(newUuid));
    }
  }, []);

  function register() {
    navigation.navigate("Register");
  }

  function RenderABRegister(props) {
    const isRegistered = props.isRegistered;
    if (isRegistered) {
      return (
        <AwesomeButtonRick
          style={styles.ab_register}
          type="secondary"
          width={250}
          disabled={false}
          onPress={register}
        >
          REGISTRAR
        </AwesomeButtonRick>
      );
    } else {
      return null;
    }
  }

  return (
    <View style={styles.screen}>
      <Image style={styles.img} source={require("../../assets/logo.png")} />
      <Text style={styles.uuid}>ID DO DISPOSITIVO: {uuid}</Text>
      <Text>
        <Text style={styles.status}>STATUS DO REGISTRO: </Text>
        <Text
          style={
            isRegistered == 'true'
              ? styles.status_registered
              : styles.status_not_registered
          }
        >
          {isRegistered == 'true' ? "OK" : "NÃO REGISTRADO"}
        </Text>
      </Text>

      <AwesomeButtonRick
        style={styles.ab_denuncia}
        type="disabled"
        backgroundDarker={isRegistered == 'true' ? "#000" : "grey"}
        backgroundColor={isRegistered == 'true' ? "#00FF00" : "grey"}
        textColor={isRegistered == 'true' ? "#000" : "white"}
        disabled={isRegistered != 'true'}
        width={250}
      >
        DENUNCIA
      </AwesomeButtonRick>

      <AwesomeButtonRick
        style={styles.ab_atividade_suspeita}
        type="disabled"
        backgroundDarker={isRegistered == 'true' ? "#000" : "grey"}
        backgroundColor={isRegistered == 'true' ? "#FF6600" : "grey"}
        textColor={isRegistered == 'true' ? "#000" : "white"}
        disabled={isRegistered != 'true'}
        width={250}
      >
        ATIVIDADE SUSPEITA
      </AwesomeButtonRick>

      <AwesomeButtonRick
        style={styles.ab_emergencia}
        type="disabled"
        backgroundDarker={isRegistered == 'true' ? "#000" : "grey"}
        backgroundColor={isRegistered == 'true' ? "#FF0000" : "grey"}
        textColor={isRegistered == 'true' ? "#000" : "white"}
        disabled={isRegistered != 'true'}
        width={250}
        height={80}
        onPress={buttonClickedHandler}
      >
        EMERGÊNCIA
      </AwesomeButtonRick>

      <RenderABRegister isRegistered={isRegistered != 'true'} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    position: "absolute",
    top: -15,
  },
  screen: {
    paddingTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  uuid: {
    justifyContent: "center",
    fontSize: 10,
  },

  status: {
    justifyContent: "center",
    fontSize: 15,
  },

  status_registered: {
    justifyContent: "center",
    fontSize: 15,
    color: "green",
    fontWeight: "bold",
  },

  status_not_registered: {
    justifyContent: "center",
    fontSize: 15,
    color: "red",
    fontWeight: "bold",
  },

  ab_emergencia: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  ab_denuncia: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  ab_atividade_suspeita: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  ab_register: {
    marginTop: 30,
    marginBottom: 15,
  },

  stretch: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
  },

  ab_no_registered: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
