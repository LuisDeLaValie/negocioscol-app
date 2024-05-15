import React, { PropsWithChildren } from "react";
import { SafeAreaView, StatusBar, View, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AppBar } from "../components/AppBar";
import { Slot } from "expo-router";

type Props = PropsWithChildren<{}>;

const layout = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar translucent={false} />
      <AppBar />
      <Slot />
    </SafeAreaView>
  );
};

export default layout;
