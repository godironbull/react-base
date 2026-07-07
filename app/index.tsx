import { Text, View } from "react-native";
import BotaoItem from "./components/BotaoItem";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BotaoItem></BotaoItem>

      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
