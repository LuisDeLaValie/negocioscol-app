import { FlatList, Text, View } from "react-native";
import { Negocio } from "../models/presentar_negocio";
import { Suspense, useEffect, useState } from "react";
import { CardNegocio } from "./CardNegocio";

interface Props {
  titulo: string;
  getdata: Negocio[];
}
export const Sugerencias = ({ titulo, getdata }: Props): React.JSX.Element => {
  return (
    <View>
      <Text>{titulo}</Text>
      <Suspense fallback={<Text>Hola que estas haciendo</Text>}>
        <Lista datos={getdata} />
      </Suspense>
    </View>
  );
};

const Lista = ({ datos }: { datos: Negocio[] }): React.JSX.Element => {
  const [data, setData] = useState<Negocio[]>();

  useEffect(() => {
    setData(datos);
  }, [datos]);

  return (
    <FlatList
      horizontal={true}
      data={data}
      renderItem={({ item }) => <CardNegocio {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
