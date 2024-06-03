import { useLocalSearchParams, useRouter } from "expo-router";
import { View, StyleSheet, Dimensions, Alert } from "react-native";
import {
  Avatar,
  Dialog,
  Divider,
  FAB,
  IconButton,
  List,
  Portal,
  TextInput,
} from "react-native-paper";
import { color } from "../../../utils/colors_app";
import { useEffect, useState } from "react";
import Usuario from "../../../models/usuario";
import getUserApi from "../../../helpers/getUserApi";
import EditarAtributos from "../../../components/EditarAtributos";
import { ObtenerSesion, SerrarSesion } from "../../../helpers/login";

const settings = () => {
  const { id } = useLocalSearchParams();
  const [user, setuser] = useState<Usuario>();

  const getUser = async () => {
    const userid = await ObtenerSesion();

    const userr = await getUserApi(Number(userid));
    setuser(userr);
  };

  const router = useRouter();

  const actualizar = async () => {

    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      ...user,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const userid = await ObtenerSesion();

    fetch(
      `${apiUrl}/api/usuarios/${userid}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <View
          style={{
            alignItems: "flex-end",
            width: Dimensions.get("window").width,
          }}
        >
          <IconButton icon="content-save-edit" onPress={() => actualizar()} />
        </View>

        <Avatar.Image
          style={styles.avatar}
          size={styles.avatar.height}
          source={{
            uri: user?.Imagen,
          }}
        />

        <EditarAtributos
          titulo="nombre"
          valor={user?.Nombre}
          icono="account"
          change={(val) => {
            setuser({ ...user!, Nombre: val });
          }}
        />
        <EditarAtributos
          titulo="correo"
          valor={user?.Correo}
          icono="email"
          change={(val) => {
            setuser({ ...user!, Correo: val });
          }}
        />

        <EditarAtributos
          titulo="contraseña"
          valor={""}
          icono="lock"
          change={(val) => {
            setuser({ ...user!, Correo: "" });
          }}
        />

        <Divider />
      </View>
      <FAB
        icon="plus"
        label="cerrar sesion"
        style={styles.fab}
        onPress={() => {
          SerrarSesion();
          router.replace("/login");
        }}
      />

      {/* <Portal>
        <Dialog visible={true} onDismiss={() => {}}>
          <Dialog.Title>This is a title</Dialog.Title>
          <Dialog.Content>
            <TextInput label="Email" value={""} onChangeText={(text) => {}} />{" "}
          </Dialog.Content>
        </Dialog>
      </Portal> */}
    </>
  );
};

export default settings;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 100,
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").width * 0.4,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: color.tea_rose,
    color: "white",
  },
});
