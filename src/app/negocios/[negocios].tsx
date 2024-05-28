import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { GetNegocio, Negocio } from "../../helpers/obtener_negocio";
import { Dimensions, Image, Text, View } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import TabBarView from "../../components/TabBarView";

const NegocioPage = () => {
  const { negocios } = useLocalSearchParams();
  const [Negocio, setNegocio] = useState<Negocio>();

  useEffect(() => {
    GetNegocio(Number(negocios)).then((val) => setNegocio(val));
  }, []);

  return (
    <View>
      <View style={{ display: "flex" }}>
        <Image
          source={{
            uri: Negocio?.Imagen,
          }}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").width * 0.6,
          }}
        />
        <Text
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            color: "black",
            fontSize: 36,
            fontWeight: "700",
          }}
        >
          {Negocio?.Nombre}
        </Text>
      </View>
      <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "700" }}>
        {Negocio?.Descripsion}
      </Text>
      <TabBarView
        producto={Negocio?.Productos}
        servicios={Negocio?.Servicios}
      />
    </View>
  );
};

export default NegocioPage;
