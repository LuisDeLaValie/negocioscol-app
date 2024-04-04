import React, { PropsWithChildren } from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AppBar } from "./AppBar";

type Props = PropsWithChildren<{}>;

export const GeneralLayour = ({ children }: Props): React.JSX.Element => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar translucent={false} />
      <AppBar />
      {children}
    </SafeAreaView>
  );
};
