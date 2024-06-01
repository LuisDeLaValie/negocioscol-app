// screens/LoginScreen.js
import React, { useState } from "react";
import { Tabs, useFocusEffect, useRouter } from "expo-router";

import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button, Snackbar, shadow } from "react-native-paper";
import { GuardarSesion } from "../../helpers/login";

function LoginScreen() {
  const router = useRouter();

  const [mensaje, setMensaje] = useState("");
  const [showmensaje, setShowmensaje] = useState(false);

  const ShowMensaje = (mensaje: string) => {
    setShowmensaje(false);
    setMensaje(mensaje);
    setShowmensaje(true);
    setTimeout(() => {
      setShowmensaje(false);
    }, 3000);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Maneja el inicio de sesión aquí
    console.log("Login:", { username, password });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      Correo: username,
      Password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://api-negosioscol-production.up.railway.app/api/login",
      requestOptions
    )
      .then(async (response) => {
        var res = JSON.parse(await response.text());
        if (response.status == 200) {
          console.log(res);

          await GuardarSesion(res.Id_Usuario.toString());
          router.replace("/");
        } else {
          ShowMensaje(res.error_description);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        label="User"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        label="Pass"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Button onPress={() => router.replace("/login/crear")} style={styles.button}>
        Soy nuevo
      </Button>

      <Snackbar visible={showmensaje} onDismiss={() => {}}>
        {mensaje}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default LoginScreen;
