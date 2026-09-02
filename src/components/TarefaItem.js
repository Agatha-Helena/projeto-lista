import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable } from 'react-native';

/* teste */
// Componente responsável por renderizar UM item da lista de tarefas.
// Recebe a tarefa e duas funções (callbacks) vindas do componente pai (a screen)
// para avisar quando o usuário quer concluir ou excluir essa tarefa.
export default function TarefaItem({ tarefa, aoAlternarConcluida, aoExcluir, aoEditar, aoDetalhar }) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.item}>
      {/* Ao tocar no texto, a tarefa alterna entre concluída/pendente */}
      <TouchableOpacity
        style={styles.textoContainer}
        onPress={() => aoAlternarConcluida(tarefa.id)}
      >
        <Text style={[styles.texto, tarefa.concluida && styles.textoConcluido]}>
          {tarefa.texto}
        </Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={styles.botaoDetalhes}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textoBotao}>Detalhes</Text>

        </TouchableOpacity>,
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Detalhes: {aoDetalhar()}</Text>
              
              {/* Botão para fechar o pop-up */}
              <Pressable
                style={styles.botaoExcluir}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textoBotao}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity
        style={styles.botaoEditar}
        onPress={() => aoEditar(tarefa.id)}
      >
        <Text style={styles.textoBotao}>Editar</Text>
      </TouchableOpacity>,
      <TouchableOpacity
        style={styles.botaoExcluir}
        onPress={() => aoExcluir(tarefa.id)}
      >
        <Text style={styles.textoBotao}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    // Sombra leve só para destacar o card (funciona em iOS e Android)
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  textoContainer: {
    flex: 1,
    marginRight: 10,
  },
  texto: {
    fontSize: 16,
    color: '#222',
  },
  textoConcluido: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  botaoExcluir: {
    backgroundColor: '#e74c3c',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  botaoDetalhes: {
    backgroundColor: '#6fe92e',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  botaoEditar: {
    backgroundColor: '#ebdc09',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});