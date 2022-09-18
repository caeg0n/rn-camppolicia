import * as React from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";

// import { DEV_API_BASE, PROD_API_BASE } from "@env";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { BackHandler } from "react-native";

export default function Denuncia({ navigation }) {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      reference: "",
      cel: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log("errors", errors);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome ou Apelido do Cidadão</Text>
      <Controller
      control={control}
      name="name"
      rules={{ required: "Campo Obrigátorio" }}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              {borderColor: error ? 'red' : '#e8e8e8'}
            ]}>
            <TextInput
              value={value}
              onChangeText={(value) => onChange(value)}
              onBlur={onBlur}
              placeholder="joão da silva"
              style={styles.input}
            />
          </View>
          {error && (
            <Text style={{marginBottom:10,marginTop:-15,color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
      {/* <Controller
        control={control}
        render={({ field: { onChange, onBlur, value }, fieldState: {error}}) => (
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
          )}
        )}
        name="name"
        rules={{ required: true }}
      /> */}
      <Text style={styles.label}>
        Referencia: se for comerciante, digite o nome do comércio
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Mercado do Tião"
            placeholderTextColor="grey"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="reference"
        rules={{ required: false }}
      />
      <Text style={styles.label}>Telefone</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType={"numeric"}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="cel"
        rules={{ required: false }}
      />

      {/* <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Reset"
          onPress={() => {
            reset({
              firstName: "Bill",
              lastName: "Luo",
            });
          }}
        />
      </View> */}

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="CADASTRAR DISPOSITIVO"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  label: {
    color: "black",
    margin: 0,
    marginLeft: 0,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "blue",
    borderRadius: 20,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    marginBottom:15,
    borderRadius: 4,
  },
});
