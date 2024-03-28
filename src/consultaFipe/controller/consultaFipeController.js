import { ref } from "vue";

const consultaFipeController =
  (
    consultaMarcasUseCase,
    consultaModelosUseCase,
    consultaAnosUseCase,
    retornaDadosFipeUseCase
  ) =>
  () => {
    const tipoVeiculo = ref("");
    const dialogConsultar = ref(false);
    const selecionado = ref("");
    const selecionadoModelo = ref("");
    const selecionadoAno = ref("");

    const valorVeiculo = ref({});

    const linhas = ref([]);
    const linhasModelo = ref([]);
    const linhasAno = ref([]);


    const buscarMarcas = async (tipo) => {
      dialogConsultar.value = true;
      tipoVeiculo.value = tipo;
      linhas.value = await consultaMarcasUseCase(tipoVeiculo.value);
    };

    const selecionouMarca = async () => {
await new Promise(resolve => setTimeout(resolve, 200))
debugger
      selecionadoModelo.value = ""
      selecionadoAno.value = ""
      valorVeiculo.value = {}
      linhasModelo.value = await consultaModelosUseCase(tipoVeiculo.value, selecionado.value.codigo)
      debugger
    }

    const selecionouModelo = async () => {
      selecionadoAno.value = ""
      valorVeiculo.value = {}
      

      linhasAno.value = await consultaAnosUseCase(tipoVeiculo.value, selecionado.value.codigo, selecionadoModelo.value.codigo)

    }

    const selecionouAno = async () => {
      valorVeiculo.value = await retornaDadosFipeUseCase(tipoVeiculo.value, selecionado.value.codigo, selecionadoModelo.value.codigo, selecionadoAno.value.codigo)
    } 

    const limpar = () => {
      dialogConsultar.value = false
      selecionado.value = ""
      selecionadoModelo.value = ""
      selecionadoAno.value = ""
      valorVeiculo.value = {}
    }

    return {
      tipoVeiculo,
      dialogConsultar,
      selecionado,
      selecionadoModelo,
      selecionadoAno,
      valorVeiculo,
      linhas,
      linhasModelo,
      linhasAno,
      buscarMarcas,
      selecionouMarca,
      selecionouModelo,
      selecionouAno,
      limpar
    };
  };

export default consultaFipeController;
