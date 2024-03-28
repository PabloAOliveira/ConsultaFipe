import { Modelos } from "@/consultaFipe/domain/model/modelos";

const consultaModelosRepository =
  (axios) => async (tipoVeiculo, idTipoVeiculo) => {
    try {
      const response = await axios.get(
        `/${tipoVeiculo}/marcas/${idTipoVeiculo}/modelos`
      );

      return response?.data?.modelos?.map((modelos) => new Modelos(modelos)) ?? [];
    } catch (error) {
      throw error;
    }
  };

export default consultaModelosRepository;
