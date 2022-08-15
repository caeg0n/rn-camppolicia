import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

import { useSelector, useDispatch } from "react-redux";
import { setName, setAge, getCities } from "../redux/actions";

export default function Home({ navigation }) {
  const { name, age, cities } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  let denuncia_text_color = "#000";
  let denuncia_background_color = "#00FF00";
  let emergencia_text_color = "#000";
  let emergencia_background_color = "#FF0000";

  let denuncia_disabled_state = false;
  let emergencia_disabled_state = false;
  let atividade_disabled_state = false;

  let atividade_background_color = "#FF4500";
  let atividade_text_color = "#000";

  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
  };

  useEffect(()=>{
    dispatch(getCities());
    console.log(cities);
  },[]);

  function register() {
    dispatch(setName('jjjjjj'));
    dispatch(setAge(10));
    console.log(age)
    navigation.navigate("Register");
  }

  function RenderABRegister(props) {
    const registerState = props.registerState;
    if (registerState) {
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
      <Text style={styles.uuid}>ID DO DISPOSITIVO: {global.UUID}</Text>
      <Text>
        <Text style={styles.status}>STATUS DO REGISTRO: </Text>
        <Text style={styles.status}>não registrado</Text>
      </Text>

      <AwesomeButtonRick
        style={styles.ab_denuncia}
        type="primary"
        backgroundDarker="#000"
        backgroundColor={denuncia_background_color}
        textColor={denuncia_text_color}
        disabled={denuncia_disabled_state}
        width={250}
      >
        DENUNCIA
      </AwesomeButtonRick>

      <AwesomeButtonRick
        style={styles.ab_emergencia}
        type="primary"
        backgroundDarker="#000"
        backgroundColor={emergencia_background_color}
        textColor={emergencia_text_color}
        disabled={emergencia_disabled_state}
        width={250}
        height={80}
        onPress={buttonClickedHandler}
      >
        EMERGÊNCIA
      </AwesomeButtonRick>

      <AwesomeButtonRick
        type="primary"
        backgroundDarker="#000"
        backgroundColor={atividade_background_color}
        textColor={atividade_text_color}
        disabled={atividade_disabled_state}
        width={250}
        style={styles.ab_atividade_suspeita}
      >
        ATIDADE SUSPEITA
      </AwesomeButtonRick>

      <RenderABRegister registerState={true} />

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
    fontSize: 10,
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
