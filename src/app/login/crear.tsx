import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Avatar, Title } from "react-native-paper";
import { GuardarSesion } from "../../helpers/login";
import { useRouter } from "expo-router";

const RegisterScreen = () => {

    const router = useRouter();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const registrar = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      Nombre: name,
      Apellidos: "---",
      Correo: email,
      Password: password,
      Cumpleanos: "0001-01-01T00:00:00Z",
      Imagen: "https://avatars.githubusercontent.com/u/34776956?v=4",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://api-negosioscol-production.up.railway.app/api/usuarios",
      requestOptions
    )
      .then(async (response) => {
        const res = JSON.parse(await response.text());

        if (response.status == 200) {
          await GuardarSesion(res.Id_Usuario.toString());
          router.replace("/");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Registrar</Title>
      <Avatar.Icon size={100} icon="account" style={styles.avatar} />
      <TextInput
        label="Nombre"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        label="Correo"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={() => registrar()}
        style={styles.button}
      >
        Siguiente
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    alignSelf: "center",
    marginBottom: 20,
    fontSize: 24,
  },
  avatar: {
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default RegisterScreen;
