import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { IconButton, List, TextInput } from "react-native-paper";

interface Props {
  titulo: string;
  icono: string;
  valor: string | undefined;
  change: (val: string) => void;
}

const EditarAtributos = ({ icono, titulo, valor, change }: Props) => {
  const [editar, setEditar] = useState(false);

  return (
    <List.Item
      title={titulo}
      description={
        !editar ? (
          valor
        ) : (
          <View
            style={{
              width: Dimensions.get("window").width-150,
              backgroundColor: "red",
            }}
          >
            <TextInput value={valor} onChangeText={change} style={{ backgroundColor:'white'}} />
          </View>
        )
      }
      left={(props) => <List.Icon {...props} icon={icono} />}
      right={(props) =>
        editar ? (
          <IconButton icon="check" onPress={() => setEditar(false)} />
        ) : (
          <IconButton icon="pencil" onPress={() => setEditar(true)} />
        )
      }
    />
  );
};

export default EditarAtributos;
