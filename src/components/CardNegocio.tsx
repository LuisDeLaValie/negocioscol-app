import React from "react";
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Negocio } from "../models/presentar_negocio";
import { router } from "expo-router";

export const CardNegocio = (negocio: Negocio) => {
  return (
    <TouchableHighlight
      style={styles.card}
      onPress={() => router.push(`/negocios/${negocio.id}`)}
    >
      <ImageBackground
        style={styles.cardBackground}
        source={{ uri: negocio.pordada }}
        resizeMode="cover"
        // overlayColor="rgba(255, 255, 255, 0.5)"
      >
        <View style={styles.cardContent}>
          {/* <Image style={styles.perfil} source={{ uri: negocio.perfil }} /> */}
          <Text style={styles.titulo}>{negocio.nombre}</Text>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 5,
  },
  cardBackground: {
    flex: 1,
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(137, 137, 137, 0.249)',  },
  perfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  titulo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
