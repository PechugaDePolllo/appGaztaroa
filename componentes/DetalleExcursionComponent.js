import { Component } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Card, Text, Divider, IconButton } from 'react-native-paper';
import { baseUrl } from '../comun/comun';

function RenderExcursion(props) {
  const excursion = props.excursion;

  if (excursion != null) {
    return (
      <Card style={styles.card}>
        <Card.Title
          title={excursion.nombre}
          titleStyle={styles.titulo}
          style={styles.cardTitle}
        />

        <Card.Cover
          source={{ uri: baseUrl + excursion.imagen }}
          style={styles.image}
        />

        <Card.Content>
          <Text style={styles.descripcion}>
            {excursion.descripcion}
          </Text>
        </Card.Content>

        <View style={styles.iconoContainer}>
          <IconButton
            icon={props.favorita ? 'heart' : 'heart-outline'}
            size={28}
            onPress={() =>
              props.favorita
                ? console.log('La excursión ya se encuentra entre las favoritas')
                : props.onPress()
            }
          />
        </View>
      </Card>
    );
  } else {
    return <View />;
  }
}

function RenderComentario(props) {
  const comentarios = props.comentarios || [];

  const renderComentarioItem = ({ item }) => {
    return (
      <View>
        <Text style={styles.comentarioTexto}>
          {item.comentario}
        </Text>

        <Text>
          Valoración: {item.valoracion} estrellas
        </Text>

        <Text>
          -- {item.autor}, {new Date(item.dia).toLocaleDateString()}
        </Text>

        <Divider style={styles.divider} />
      </View>
    );
  };

  return (
    <Card style={styles.card}>
      <Card.Title title="Comentarios" />
      <Card.Content>
        <FlatList
          data={comentarios}
          renderItem={renderComentarioItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card.Content>
    </Card>
  );
}

class DetalleExcursion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritos: [],
    };
  }

  marcarFavorito(excursionId) {
    this.setState({
      favoritos: this.state.favoritos.concat(excursionId),
    });
  }

  render() {
    const { excursionId } = this.props.route.params;

    const excursiones = this.props.excursiones || [];
    const comentarios = this.props.comentarios || [];

    return (
      <ScrollView>
        <RenderExcursion
          excursion={excursiones[+excursionId]}
          favorita={this.state.favoritos.some((el) => el === excursionId)}
          onPress={() => this.marcarFavorito(excursionId)}
        />

        <RenderComentario
          comentarios={comentarios.filter(
            (comentario) => comentario.excursionId === excursionId
          )}
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
  iconoContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  comentarioTexto: {
    marginTop: 8,
    marginBottom: 4,
    fontSize: 15,
  },
  divider: {
    marginTop: 8,
    marginBottom: 8,
  },
});

export default DetalleExcursion;