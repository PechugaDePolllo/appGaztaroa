import React, { Component } from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import { Card, Text, List, Divider } from 'react-native-paper';
import { ACTIVIDADES } from '../comun/actividades';

function Historia() {
  return (
    <Card style={styles.card}>
      <Card.Title title="Nuestra historia" />
      <Card.Content>
        <Text style={styles.texto}>
          El nacimiento del club de montaña Gaztaroa se remonta a la primavera
          de 1976 cuando jóvenes aficionados a la montaña y pertenecientes a un
          club juvenil decidieron crear la sección montañera de dicho club.
          Fueron unos comienzos duros debido sobre todo a la situación política
          de entonces. Gracias al esfuerzo económico de sus socios y socias se
          logró alquilar una bajera. Gaztaroa ya tenía su sede social.
          {'\n\n'}
          Desde aquí queremos hacer llegar nuestro agradecimiento a todos los
          montañeros y montañeras que alguna vez habéis pasado por el club
          aportando vuestro granito de arena.
          {'\n\n'}
          Gracias!
        </Text>
      </Card.Content>
    </Card>
  );
}

class QuienesSomos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actividades: ACTIVIDADES,
    };
  }

  renderActividad = ({ item }) => {
    return (
      <View>
        <List.Item
          title={item.nombre}
          description={item.descripcion}
          titleNumberOfLines={0}
          descriptionNumberOfLines={5}
          left={(props) => (
            <Image
              source={require('./imagenes/40Años.png')}
              style={[props.style, styles.imagen]}
              resizeMode="cover"
            />
          )}
        />
        <Divider />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Historia />

        <Card style={styles.card}>
          <Card.Title title="Actividades" />
          <Card.Content>
            <FlatList
              data={this.state.actividades}
              renderItem={this.renderActividad}
              keyExtractor={(item) => item.id.toString()}
            />
          </Card.Content>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 8,
  },
  texto: {
    fontSize: 16,
    lineHeight: 22,
  },
  imagen: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
});

export default QuienesSomos;