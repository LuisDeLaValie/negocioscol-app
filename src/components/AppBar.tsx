import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { color } from "../utils/colors_app";

export const AppBar = () => {
  return (
    <View style={styles.Appbar}>
      <TouchableHighlight
        style={styles.menu}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => Alert.alert("Menu!")}
      >
        <Text>avatr</Text>
      </TouchableHighlight>
      <View>
        <TextInput style={styles.buscador} placeholder="Buscar" />
      </View>
      <TouchableHighlight
        style={styles.abatar}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => Alert.alert("Perfil!")}
      >
        <Text>avatar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  Appbar: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: color.hunyandi_yellow,
    color: "#ffff",
    flexDirection: "row",
  },
  buscador: {
    marginHorizontal: 10,
    backgroundColor: color.linen,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 240,
  },
  abatar: {
    borderRadius: 100,
    width: 40,
    height: 40,
    backgroundColor: "#df2020",
  },
  menu: {
    borderRadius: 10,
    width: 40,
    height: 40,
    backgroundColor: "#1a7fbf",
  },
});
