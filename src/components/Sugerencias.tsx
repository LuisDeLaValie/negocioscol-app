import { FlatList, Text, View } from "react-native";
import { Negocio } from "../models/presentar_negocio";
import { Suspense, useEffect, useState } from "react";
import { CardNegocio } from "./CardNegocio";

interface Props {
  titulo: string;
  getdata: Promise<Negocio[]>;
}
export const Sugerencias = ({ titulo, getdata }: Props): React.JSX.Element => {
  console.log("Entrando a Sugerencias");

  return (
    <View>
      <Text>{titulo}</Text>
      <Suspense fallback={<Text>Hola</Text>}>
        <Lista promise={getdata} />
      </Suspense>
    </View>
  );
};

const Lista = ({
  promise,
}: {
  promise: Promise<Negocio[]>;
}): React.JSX.Element => {
  const [data, setData] = useState<Negocio[]>();

  useEffect(() => {
    console.log("useEffect");

    promise
      .then((value) => {
        setData(value);
        console.log("todo bien");
      })
      .catch((e) => {
        console.log("Algo salio mal");
      })
      .finally(() => {
        console.log("promisea terminada");
      });
  }, [promise]);

  console.log("Entrando a Lista");
  return (
    <FlatList
      horizontal={true}
      data={data}
      renderItem={({ item }) => <CardNegocio {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
