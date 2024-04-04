import React from "react";
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { color } from "../utils/colors_app";

import second, { Appbar, Avatar } from "react-native-paper";

export const AppBar = (): React.JSX.Element => {
  return (
    <Appbar style={styles.Appbar}>
      <Appbar.Action
        style={styles.menu}
        icon="menu"
        onPress={() => Alert.alert("Menu!")}
      />
      <TextInput style={styles.buscador} placeholder="Buscar" />

      <TouchableHighlight
        style={styles.avatar}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => Alert.alert("Perfil!")}
      >
        <Avatar.Image
          style={styles.avatar}
          size={styles.avatar.height}
          source={{
            uri: "https://i.pinimg.com/originals/08/af/0e/08af0e9cb70920f9a9460e1db64b3771.jpg",
          }}
        />
      </TouchableHighlight>
    </Appbar>
  );
};

const styles = StyleSheet.create({
  Appbar: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: color.hunyandi_yellow,
    color: "#ffff",
    flexDirection: "row",
    alignContent: "space-around",
  },
  buscador: {
    marginHorizontal: 10,
    backgroundColor: color.linen,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: Dimensions.get("window").width * 0.6,
  },
  avatar: {
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  menu: {
    borderRadius: 10,
    width: 40,
    height: 40,
  },
});
