import {
  Text,
  StyleSheet,
  Button,
  View,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const curso1 = require('../../img/img-01.jpg')
const curso2 = require('../../img/img-02.jpg')
const curso3 = require('../../img/img-03.jpg')

export default function Cursos() {

  const navigation = useNavigation();

  function torneiro() {
    navigation.navigate('Detalhes', { nomeCurso: 'CURSO DE TORNEIRO MECÂNICO', image: curso1, descricao: 'O Curso de Qualificação Profissional Torneiro Mecânico tem por objetivo o desenvolvimento de competências relativas à operação de torno mecânico convencional de acordo com normas técnicas, ambientais e de segurança do trabalho' });
  }
  function eletricista() {
    navigation.navigate('Detalhes', { nomeCurso: 'CURSO ELETRICISTA INSTALADOR', image: curso2, descricao: 'No curso Eletricista Instalador o aluno irá aprender interpretar circuitos e diagramas elétricos, planta baixa de instalações elétricas prediais e a montagem de infraestrutura básica para instalação elétrica predial. Ao final do curso, poderá elaborar croquis, executar e conferir instalações elétricas prediais, de acordo com normas técnicas, ambientais, de qualidade e de segurança e saúde no trabalho.' })
  }
  function mecanico() {
    navigation.navigate('Detalhes', { nomeCurso: 'CURSO DE MECÂNICA', image: curso3, descricao: 'Habilitar profissionais para realizar a manutenção e a inspeção de sistemas automotivos, participar da gestão de recursos utilizados nos processos produtivos e de manutenção e participar do processo produtivo de veículos automotores, seguindo as normas técnicas, ambientais, de qualidade, de saúde e segurança no trabalho e especificações do fabricante.' })
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <Button style={[styles.title]} onPress={torneiro} title='CURSO DE TORNEIRO MECÂNICO'></Button>
        <Image source={curso1} style={[styles.imgCurso]}></Image>

        <Button style={[styles.title]} onPress={eletricista} title='CURSO DE ELETRICISTA INSTALADOR'></Button>
        <Image source={curso2} style={[styles.imgCurso]}></Image>

        <Button style={[styles.title]} onPress={mecanico} title='CURSO DE MANUTENÇÃO AUTOMOTIVA'></Button>
        <Image source={curso3} style={[styles.imgCurso]}></Image>
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  imgCurso: {
    width: 300,
    height: 350,
    marginBottom: 30,
    borderRadius: 5,

  },
  title:{
    color: 'red',

  }
  
});
