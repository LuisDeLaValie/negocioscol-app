import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import listarDataTrabajos from "../../../helpers/listar_trabajos_card";
import { Sugerencias } from "../../../components/Sugerencias";
import {
  Buscar,
  SearchResult,
  isResultNegocio,
  isResultProducto,
  isResultServicio,
} from "../../../helpers/buscar_tabajos";
import {
  BuscarNegocio,
  BuscarProducto,
  BuscarServicio,
} from "../../../models/buscar_negocias";
import NegocioSearch from "../../../models/Negocio";
import ProductoSearch from "../../../models/Producto";
import ServicioSearch from "../../../models/servicios";
import { Negocio } from "../../../models/presentar_negocio";

interface dasboard {
  titulo: string;
  data: Negocio[];
}

const PageHome = () => {
  const [resultados, setResultados] = useState<dasboard[]>([]);

  useEffect(() => {
    Buscar("").then((resultados) => {
      var productos: dasboard = {
        titulo: "Productos",
        data: [],
      };
      var servicios: dasboard = {
        titulo: "Servicios",
        data: [],
      };
      var negocios: dasboard = {
        titulo: "Negocios",
        data: [],
      };
      for (let i = 0; i < resultados.length; i++) {
        const item = resultados[i];
        if (isResultProducto(item)) {
          productos.data = [
            ...productos.data,
            {
              id: item.Id_Negocio.toString(),
              nombre: item.Nombre,
              pordada: item.Imagen,
              perfil: "",
            },
          ];
        }

        if (isResultServicio(item)) {
          servicios.data = [
            ...servicios.data,
            {
              id: item.Id_Negocio.toString(),
              nombre: item.Nombre,
              pordada: item.Imagen,
              perfil: "",
            },
          ];
        }

        if (isResultNegocio(item)) {
          negocios.data = [
            ...negocios.data,
            {
              id: item.Id_Negocio.toString(),
              nombre: item.Negocio,
              pordada: item.Imagen,
              perfil: "",
            },
          ];
        }
      }

      setResultados([productos, servicios, negocios]);
    });
  }, []);

  return (
    <View style={styles.cuntent}>
      <FlatList
        data={resultados}
        // keyExtractor={({ titulo }) => titulo}
        renderItem={({ item }) => {
          return (
            <View style={styles.sugerencia}>
              <Sugerencias titulo={item.titulo} getdata={item.data} />
            </View>
          );
        }}
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
