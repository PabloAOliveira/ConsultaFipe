import { Anos } from "@/consultaFipe/domain/model/anos";
const consultaAnosRepository =
  (axios) => async (tipoVeiculo, idTipoVeiculo, idModelo) => {
    try {
      const response = await axios.get(
        `/${tipoVeiculo}/marcas/${idTipoVeiculo}/modelos/${idModelo}/anos`
      );

      return response?.data?.map((anos) => new Anos(anos)) ?? [];
    } catch (error) {
      throw error;
    }
  };

export default consultaAnosRepository;
