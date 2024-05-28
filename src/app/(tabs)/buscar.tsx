import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { Divider, IconButton, List, TextInput } from "react-native-paper";

import {
  Buscar,
  SearchResult,
  isResultNegocio,
  isResultProducto,
  isResultServicio,
} from "../../helpers/buscar_tabajos";

const settings = () => {
  const { id } = useLocalSearchParams();

  const [search, setSearch] = useState<string>("");
  const [filtro, setfiltro] = useState<number[]>([0, 1, 2]);
  const [busqueda, setbusqueda] = useState<SearchResult[]>([]);

  useEffect(() => {
    // const res = buscar(search, filtro);
    Buscar(search).then((val) => setbusqueda(val));
    // setbusqueda(res);
  }, [search, filtro]);

  const renderItem = ({ item }: { item: SearchResult }) => {
    if (isResultProducto(item)) {
      console.log("busqueda es Produto");
      return (
        <List.Item
          title={item.Nombre}
          description={`\t en ${item.Negocio}`}
          onPress={() => router.push(`/negocios/${item.Id_Negocio}`)}
        />
      );
    }

    if (isResultServicio(item)) {
      console.log("busqueda es Servicio");
      return (
        <List.Item
          title={item.Nombre}
          description={`\t en ${item.Negocio}`}
          onPress={() => router.push(`/negocios/${item.Id_Negocio}`)}
        />
      );
    }

    if (isResultNegocio(item)) {
      console.log("busqueda es Negocio");

      return (
        <List.Item
          title={item.Negocio}
          onPress={() => router.push(`/negocios/${item.Id_Negocio}`)}
        />
      );
    }
  };

  return (
    <View>
      <TextInput
        value={search}
        onChangeText={(val) => setSearch((v) => val)}
        mode="outlined"
        // label="Outlined input"
        placeholder="Buscar servicio, producto o negocio"
      />
      <Divider />
      <FlatList
        data={busqueda} // Pass your data array to the data prop
        renderItem={renderItem} // Function to render each item
        keyExtractor={(item, i) => i.toString()} // Optional: Unique key for each item
      />
    </View>
  );
};

export default settings;
