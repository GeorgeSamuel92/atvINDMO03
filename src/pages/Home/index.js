import { Text, StyleSheet, Button, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../img/logo-senai.png")}
        style={styles.logo}>
        </Image>
          <Text>George S. F. Ratier</Text>
          <Text>Sumaré, 07/02/2024</Text>
          <Text>Escola SENAI Celso Charuri</Text>
          <Text>Técnico em Desenvolvimento de Sistemas</Text>
          <Text>INDMO - Interface para Dispositivos Móveis</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },

  logo: {
    width: 300,
    height:250,
    margin:50
  }
});

