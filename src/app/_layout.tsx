import React, { PropsWithChildren, useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  View,
  useColorScheme,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AppBar } from "../components/AppBar";
import { Slot, Stack } from "expo-router";
import { Avatar } from "react-native-paper";
import { color } from "../utils/colors_app";
import Usuario from "../models/usuario";
import getUserApi from "../helpers/getUserApi";

type Props = PropsWithChildren<{}>;

const layout = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [user, setuser] = useState<Usuario>();

  const getUser = async () => {
    const userr = await getUserApi(2);
    setuser(userr);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerRight: (pop) => (
          <Avatar.Image
            style={styles.avatar}
            size={styles.avatar.height}
            source={{
              uri: user?.Imagen,
            }}
          />
        ),

        headerStyle: styles.Appbar,
        headerTitle: "",
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="negocios" />
    </Stack>
  );
};

export default layout;

const styles = StyleSheet.create({
  Appbar: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: color.hunyandi_yellow,
    color: "#ffff",
    flexDirection: "row",
    justifyContent: "flex-end",
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
