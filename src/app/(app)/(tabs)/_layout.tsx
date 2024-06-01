import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useFocusEffect, useRouter } from "expo-router";
import { color } from "../../../utils/colors_app";
import { ObtenerSesion } from "../../../helpers/login";

const _layout = () => {
  const router = useRouter();
  useFocusEffect(() => {
    ObtenerSesion().then((user) => {
      if (!user) {
        router.replace("/login");
      }
    });
  });
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: color.cambridge_blue }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="buscar"
        options={{
          title: "buscar",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        // initialParams={'id':2}
        options={{
          title: "Settings",
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
