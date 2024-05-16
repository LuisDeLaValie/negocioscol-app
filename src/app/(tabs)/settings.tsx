import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const settings = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Tab [Home|Settings]</Text>
    </View>
  );
};

export default settings;
