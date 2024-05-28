import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import { Avatar, Divider, FAB, IconButton, List } from "react-native-paper";
import { color } from "../../utils/colors_app";
import { useEffect, useState } from "react";
import Usuario from "../../models/usuario";
import getUserApi from "../../helpers/getUserApi";

const settings = () => {
  const { id } = useLocalSearchParams();
  const [user, setuser] = useState<Usuario>();

  const getUser = async () => {
    const userr = await getUserApi(2);
    setuser(userr);
  };

  useEffect(() => {
    getUser();
  },[]);
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
          <IconButton
            icon="content-save-edit"
            onPress={() => Alert.alert("Pressed")}
          />
        </View>

        <Avatar.Image
          style={styles.avatar}
          size={styles.avatar.height}
          source={{
            uri: user?.Imagen,
          }}
        />
        <List.Item
          title="nombre"
          description={user?.Nombre}
          left={(props) => <List.Icon {...props} icon="account" />}
          right={(props) => (
            <IconButton icon="pencil" onPress={() => Alert.alert("Pressed")} />
          )}
        />
        <List.Item
          title="correo"
          description={user?.Correo}
          left={(props) => <List.Icon {...props} icon="email" />}
          right={(props) => (
            <IconButton icon="pencil" onPress={() => Alert.alert("Pressed")} />
          )}
        />
        <List.Item
          title="contraseña"
          description="***********"
          left={(props) => <List.Icon {...props} icon="lock" />}
          right={(props) => (
            <IconButton icon="pencil" onPress={() => Alert.alert("Pressed")} />
          )}
        />
        <Divider />
      </View>
      <FAB
        icon="plus"
        label="Crear local"
        style={styles.fab}
        onPress={() => console.log("Pressed")}
      />
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
