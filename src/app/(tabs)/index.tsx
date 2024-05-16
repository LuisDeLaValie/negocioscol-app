import { Link } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import listarDataTrabajos from "../../helpers/listar_trabajos_card";
import { Sugerencias } from "../../components/Sugerencias";

const PageHome = () => {

  const sug = [
    { titulo: "Lo Nuevo", data: listarDataTrabajos() },
    { titulo: "Lo mas Usado", data: listarDataTrabajos() },
    { titulo: "Mas Interesante", data: listarDataTrabajos() },
    { titulo: "Promociones", data: listarDataTrabajos() },
    { titulo: "Mas Interesante", data: listarDataTrabajos() },
  ];

  return (
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
  );
};

export default PageHome;



const styles = StyleSheet.create({
  cuntent: {
    paddingTop: 30,
    paddingHorizontal: 5,
  },
  sugerencia: {
    marginBottom: 40,
  },
});
