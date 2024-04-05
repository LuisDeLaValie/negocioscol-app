import React, { Suspense, useEffect, useState } from "react";
import { GeneralLayour } from "../layouts/General_Layour";

import listarDataTrabajos from "../helpers/listar_trabajos_card";
import { Sugerencias } from "../components/Sugerencias";
import { FlatList, StyleSheet, View } from "react-native";
import { Negocio } from "../models/presentar_negocio";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

export const HomeScreen = () => {
  const sug = [
    { titulo: "Lo Nuevo", data: listarDataTrabajos() },
    { titulo: "Lo mas Usado", data: listarDataTrabajos() },
    { titulo: "Mas Interesante", data: listarDataTrabajos() },
  ];

  return (
    <GeneralLayour>
      <View style={styles.cuntent}>
        <FlatList
          data={sug}
          renderItem={(item) => (
            <View style={styles.sugerencia}>
              <Sugerencias titulo={item.item.titulo} getdata={item.item.data} />
            </View>
          )}
        />
      </View>
    </GeneralLayour>
  );
};

const styles = StyleSheet.create({
  cuntent: {
    paddingTop: 30,
    paddingHorizontal: 5,
  },
  sugerencia: {
    marginBottom: 40,
  },
});
