// import { useEffect, useState } from "react";
// import {
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Modal,
//   Pressable
// } from "react-native";
// import TarefaItem from "../components/TarefaItem";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const CHAVE_STORAGE = "@rn-storage-lesson:tarefas";

// export default function ListaTarefasScreen() {
//   const [tarefas, setTarefas] = useState([]);
//   const [textoInput, setTextoInput] = useState("");
//   const [carregando, setCarregando] = useState(true);
//   const [modalVisible, setModalVisible] = useState(false)

//   useEffect(() => {
//     async function carregarTarefas() {
//       try {
//         const tarefasSalvas = await AsyncStorage.getItem(CHAVE_STORAGE);
//         if (tarefasSalvas !== null) {
//           setTarefas(JSON.parse(tarefasSalvas));
//         }
//       } catch (erro) {
//         console.error("Erro ao carregar tarefas do storage:", erro);
//       } finally {
//         setCarregando(false);
//       }
//     }
//     carregarTarefas();
//   }, []);

//   useEffect(() => {
//     if (carregando) return;

//     AsyncStorage.setItem(CHAVE_STORAGE, JSON.stringify(tarefas)).catch(
//       (erro) => {
//         console.error("Erro ao salvar tarefas no storage:", erro);
//       },
//     );
//   }, [tarefas, carregando]);

//   function adicionarTarefa() {
//     const texto = textoInput.trim();
//     if (texto === "") return;

//     const novaTarefa = {
//       id: Date.now().toString(),
//       texto,
//       concluida: false,
//     };

//     setTarefas((tarefasAtuais) => [...tarefasAtuais, novaTarefa]);
//     setTextoInput("");
//   }

//   function detalhes() {
//     const texto = textoInput.trim()
//     if (texto === "") return
//   }

//   function editarTarefa() {
    
//   }

//   function alternarConcluida(id) {
//     setTarefas((tarefasAtuais) =>
//       tarefasAtuais.map((tarefa) =>
//         tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
//       ),
//     );
//   }

//   function excluirTarefa(id) {
//     setTarefas((tarefasAtuais) =>
//       tarefasAtuais.filter((tarefa) => tarefa.id !== id),
//     );
//   }

//   function excluirTudo(){
//     setTarefas([])
//   }
  
 
//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//     >
//       <Text style={styles.titulo}>Lista de Tarefas</Text>

//       <View style={styles.formulario}>
//         <TextInput
//           style={styles.input}
//           placeholder="Digite uma nova tarefa..."
//           value={textoInput}
//           onChangeText={setTextoInput}
//           onSubmitEditing={adicionarTarefa}
//           returnKeyType="done"
//         />
//         <TouchableOpacity
//           style={styles.botaoAdicionar}
//           onPress={adicionarTarefa}
//         >
//           <Text style={styles.textoBotaoAdicionar}>Adicionar</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={tarefas}
//         keyExtractor={(tarefa) => tarefa.id}
//         renderItem={({ item }) => (
//           <TarefaItem
//             tarefa={item}
//             aoAlternarConcluida={alternarConcluida}
//             aoExcluir={excluirTarefa}
//             aoEditar={editarTarefa}
//             aoDetalhar={detalhes}
//           />
//         )}
//         ListEmptyComponent={
//           <Text style={styles.listaVazia}>
//             Nenhuma tarefa cadastrada ainda.
//           </Text>
//         }
//         contentContainerStyle={styles.listaConteudo}
//       />
//       <View>
//           <TouchableOpacity
//             style={styles.botaoExcluir}
//             onPress={excluirTudo}>
//             <Text style={styles.textoBotaoExcluir}>Excluir Tudo</Text>
//           </TouchableOpacity>
//         </View>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f2f2f2",
//     paddingTop: 60,
//     paddingHorizontal: 16,
//   },
//   titulo: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//     textAlign: "center",
//   },
//   formulario: {
//     flexDirection: "row",
//     marginBottom: 16,
//   },
//   input: {
//     flex: 1,
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     marginRight: 8,
//   },
//   botaoAdicionar: {
//     backgroundColor: "#2e86de",
//     borderRadius: 8,
//     paddingHorizontal: 16,
//     justifyContent: "center",
//   },
//   botaoExcluir: {
//     backgroundColor: "#de2e2e",
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 14,
//     marginBottom: 10
//   },
//   textoBotaoAdicionar: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   textoBotaoExcluir: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   listaConteudo: {
//     paddingBottom: 20,
//   },
//   listaVazia: {
//     textAlign: "center",
//     color: "#888",
//     marginTop: 24,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 25,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#f32121',
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 14,
//     marginBottom: 10
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });




// Feito com a IA
import { useEffect, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TarefaItem from "../components/TarefaItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CHAVE_STORAGE = "@rn-storage-lesson:tarefas";

export default function ListaTarefasScreen() {
  const [tarefas, setTarefas] = useState([]);
  const [textoInput, setTextoInput] = useState("");
  const [carregando, setCarregando] = useState(true);

  // Guarda o id da tarefa que está sendo editada.
  // Enquanto for null, o formulário está em modo "adicionar".
  const [idEmEdicao, setIdEmEdicao] = useState(null);

  useEffect(() => {
    async function carregarTarefas() {
      try {
        const tarefasSalvas = await AsyncStorage.getItem(CHAVE_STORAGE);
        if (tarefasSalvas !== null) {
          setTarefas(JSON.parse(tarefasSalvas));
        }
      } catch (erro) {
        console.error("Erro ao carregar tarefas do storage:", erro);
      } finally {
        setCarregando(false);
      }
    }
    carregarTarefas();
  }, []);

  useEffect(() => {
    if (carregando) return;

    AsyncStorage.setItem(CHAVE_STORAGE, JSON.stringify(tarefas)).catch(
      (erro) => {
        console.error("Erro ao salvar tarefas no storage:", erro);
      },
    );
  }, [tarefas, carregando]);

  // Função única que decide se adiciona uma tarefa nova ou salva a edição,
  // dependendo se existe um idEmEdicao.
  function confirmarFormulario() {
    const texto = textoInput.trim();
    if (texto === "") return;

    if (idEmEdicao !== null) {
      // Modo edição: atualiza o texto da tarefa existente
      setTarefas((tarefasAtuais) =>
        tarefasAtuais.map((tarefa) =>
          tarefa.id === idEmEdicao ? { ...tarefa, texto } : tarefa,
        ),
      );
      setIdEmEdicao(null);
    } else {
      // Modo adicionar: cria uma tarefa nova
      const novaTarefa = {
        id: Date.now().toString(),
        texto,
        concluida: false,
      };
      setTarefas((tarefasAtuais) => [...tarefasAtuais, novaTarefa]);
    }

    setTextoInput("");
  }

  // Chamada quando o usuário toca em "Editar" num item da lista.
  // Preenche o input com o texto atual e guarda qual id está sendo editado.
  function iniciarEdicao(id) {
    const tarefa = tarefas.find((t) => t.id === id);
    if (!tarefa) return;

    setTextoInput(tarefa.texto);
    setIdEmEdicao(id);
  }

  function cancelarEdicao() {
    setIdEmEdicao(null);
    setTextoInput("");
  }

  function alternarConcluida(id) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
      ),
    );
  }

  function excluirTarefa(id) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.filter((tarefa) => tarefa.id !== id),
    );
    // Se a tarefa excluída era a que estava em edição, sai do modo edição
    if (id === idEmEdicao) {
      cancelarEdicao();
    }
  }

  function excluirTudo() {
    setTarefas([]);
    cancelarEdicao();
  }

  const emModoEdicao = idEmEdicao !== null;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.titulo}>Lista de Tarefas</Text>

      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa..."
          value={textoInput}
          onChangeText={setTextoInput}
          onSubmitEditing={confirmarFormulario}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={confirmarFormulario}
        >
          <Text style={styles.textoBotaoAdicionar}>
            {emModoEdicao ? "Salvar" : "Adicionar"}
          </Text>
        </TouchableOpacity>
      </View>

      {emModoEdicao && (
        <TouchableOpacity onPress={cancelarEdicao} style={styles.linkCancelar}>
          <Text style={styles.textoLinkCancelar}>Cancelar edição</Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={tarefas}
        keyExtractor={(tarefa) => tarefa.id}
        renderItem={({ item }) => (
          <TarefaItem
            tarefa={item}
            aoAlternarConcluida={alternarConcluida}
            aoExcluir={excluirTarefa}
            aoEditar={iniciarEdicao}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>
            Nenhuma tarefa cadastrada ainda.
          </Text>
        }
        contentContainerStyle={styles.listaConteudo}
      />
    
      {tarefas.length >= 2 && (
        <View>
          <TouchableOpacity style={styles.botaoExcluir} onPress={excluirTudo}>
            <Text style={styles.textoBotaoExcluir}>Excluir Tudo</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  formulario: {
    flexDirection: "row",
    marginBottom: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },
  botaoAdicionar: {
    backgroundColor: "#2e86de",
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  linkCancelar: {
    alignSelf: "flex-end",
    marginBottom: 12,
  },
  textoLinkCancelar: {
    color: "#e74c3c",
    fontWeight: "600",
  },
  botaoExcluir: {
    backgroundColor: "#de2e2e",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  textoBotaoAdicionar: {
    color: "#fff",
    fontWeight: "bold",
  },
  textoBotaoExcluir: {
    color: "#fff",
    fontWeight: "bold",
  },
  listaConteudo: {
    paddingBottom: 20,
  },
  listaVazia: {
    textAlign: "center",
    color: "#888",
    marginTop: 24,
  },
});