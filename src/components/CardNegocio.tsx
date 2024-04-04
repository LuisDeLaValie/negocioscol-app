import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Negocio } from "../models/presentar_negocio";

export const CardNegocio = (negocio: Negocio) => {
  return (
    <TouchableHighlight>
      <View style={styles.card}>
        <View style={styles.perfil}></View>
        <Text style={styles.titulo}></Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {},
  perfil: {},
  titulo: {},
});
