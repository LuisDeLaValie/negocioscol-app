import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { Divider, IconButton, List, TextInput } from "react-native-paper";
import {
  busqueda,
  isBuscarNegocio,
  isBuscarProducto,
  isBuscarServicio,
  resultadoBusqueda,
} from "../../models/buscar_negocias";
import { buscar } from "../../helpers/buscar_tabajos";

const settings = () => {
  const { id } = useLocalSearchParams();

  const [search, setSearch] = useState<string>("");
  const [filtro, setfiltro] = useState<number[]>([0, 1, 2]);
  const [busqueda, setbusqueda] = useState<busqueda>([]);

  useEffect(() => {
    const res = buscar(search, filtro);
    setbusqueda(res);
  }, [search, filtro]);

  const renderItem = ({ item }: { item: resultadoBusqueda }) => {
    if (isBuscarNegocio(item)) {
      return <List.Item title={item.negocio} onPress={()=>Alert.alert("negocio")} />;
    }

    if (isBuscarProducto(item)) {
      return (
        <List.Item title={item.producto} description={`\t en ${item.negocio}`} onPress={()=>Alert.alert("negocio")} />
      );
    }

    if (isBuscarServicio(item)) {
      return (
        <List.Item title={item.servicio} description={`\t en ${item.negocio}`} onPress={()=>Alert.alert("negocio")} />
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
