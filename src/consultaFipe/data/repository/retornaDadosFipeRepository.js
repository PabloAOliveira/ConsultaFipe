import { Fipe } from "@/consultaFipe/domain/model/fipe";

const retornaDadosFipeRepository =
  (axios) => async (tipoVeiculo, idTipoVeiculo, idModelo, ano) => {
    try {
      const response = await axios.get(
        `${tipoVeiculo}/marcas/${idTipoVeiculo}/modelos/${idModelo}/anos/${ano}`
      );

      return new Fipe(response?.data) ?? {}
    } catch (error) {
      throw error;
    }
  };

export default retornaDadosFipeRepository;
