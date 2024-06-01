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
    <Stack
      screenOptions={{
        // headerShown: false,
        title:""
      }}
    >
      <Stack.Screen name="(app)"
      
      />
      <Stack.Screen name="login" /> *
    </Stack>
  );
};

export default layout;
