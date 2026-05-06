import { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { baseUrl } from '../comun/comun';

function RenderItem({ item }) {
  if (!item) {
    return <View />;
  }

  return (
    <Card style={styles.card}>
      <Card.Title
        title={item.nombre}
        titleStyle={styles.titulo}
        style={styles.cardTitle}
      />

      <Card.Cover
        source={{ uri: baseUrl + item.imagen }}
        style={styles.image}
      />

      <Card.Content>
        <Text style={styles.descripcion}>
          {item.descripcion}
        </Text>
      </Card.Content>
    </Card>
  );
}

class Home extends Component {
  render() {
    const cabeceras = this.props.cabeceras || [];
    const excursiones = this.props.excursiones || [];
    const actividades = this.props.actividades || [];

    return (
      <ScrollView>
        <RenderItem
          item={cabeceras.filter((item) => item.destacado)[0]}
        />

        <RenderItem
          item={excursiones.filter((item) => item.destacado)[0]}
        />

        <RenderItem
          item={actividades.filter((item) => item.destacado)[0]}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
  },
  image: {
    marginHorizontal: 0,
  },
  descripcion: {
    marginTop: 20,
    marginBottom: 20,
  },
  titulo: {
    textAlign: 'center',
  },
  cardTitle: {
    alignItems: 'center',
  },
});

export default Home;