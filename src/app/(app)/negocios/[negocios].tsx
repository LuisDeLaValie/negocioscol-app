import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { GetNegocio, Negocio } from "../../../helpers/obtener_negocio";
import { ActivityIndicator, Dimensions, Image, Text, View } from "react-native";
import TabBarView from "../../../components/TabBarView";

const NegocioPage = () => {
  const { negocios } = useLocalSearchParams();
  const [Negocio, setNegocio] = useState<Negocio>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetNegocio(Number(negocios))
      .then((val) => {
        setNegocio(val);
        setLoading(false);
      })
      .catch((val) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View
        style={{
          display: "flex",
          justifyContent:'center',
          height: Dimensions.get("window").height,
        }}
      >
        <ActivityIndicator animating={true} size={100}  color={"#84A59D"}/>
      </View>
    );
  }
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
