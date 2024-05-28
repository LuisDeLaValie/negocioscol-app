import React, { useState } from "react";
import { Avatar, List, SegmentedButtons } from "react-native-paper";
import { Producto, Servicio } from "../helpers/obtener_negocio";
import { View } from "react-native";

interface Props {
  servicios?: Servicio[];
  producto?: Producto[];
}

const TabBarView = ({ producto, servicios }: Props) => {
  const [index, setIndex] = useState("0");

  if (producto == undefined || servicios == undefined) {
    if (producto == undefined) {
      return servicios?.map((val, i) => (
        <List.Item
          key={i}
          title={val.Nombre}
          description={val.Descripcion}
          left={(props) => (
            <Avatar.Image size={50} source={{ uri: val.Imagen }} />
          )}
        />
      ));
    }
    if (servicios == undefined) {
      return producto?.map((val, i) => (
        <List.Item
          key={i}
          title={val.Nombre}
          description={val.Descripsion}
          left={(props) => (
            <Avatar.Image size={50} source={{ uri: val.Imagen }} />
          )}
        />
      ));
    }
  }

  return (
    <View>
      <SegmentedButtons
        style={{ marginTop: 20, marginHorizontal: 12 }}
        value={index}
        onValueChange={setIndex}
        buttons={[
          {
            value: "0",
            label: "Productos",
          },
          {
            value: "1",
            label: "Servicios",
          },
        ]}
      />

      {index == "0"
        ? producto?.map((val, i) => (
            <List.Item
              key={i}
              title={val.Nombre}
              description={val.Descripsion}
              left={(props) => (
                <Avatar.Image size={50} source={{ uri: val.Imagen }} />
              )}
            />
          ))
        : null}

      {index == "1"
        ? servicios?.map((val, i) => (
            <List.Item
              key={i}
              title={val.Nombre}
              description={val.Descripcion}
              left={(props) => (
                <Avatar.Image size={50} source={{ uri: val.Imagen }} />
              )}
            />
          ))
        : null}
    </View>
  );
};

export default TabBarView;
