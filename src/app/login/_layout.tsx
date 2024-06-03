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
import { Slot, Stack } from "expo-router";

type Props = PropsWithChildren<{}>;

const layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index" options={{title:""}} />
      <Stack.Screen name="crear" options={{title:""}} /> 
    </Stack>
  );
};

export default layout;
