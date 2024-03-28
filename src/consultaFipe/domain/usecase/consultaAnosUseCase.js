const consultaAnosUseCase =
  (repository) => async (tipoVeiculo, idTipoVeiculo, idModelo) => {
    try {
      return await repository(tipoVeiculo, idTipoVeiculo, idModelo);
    } catch (error) {
      throw error;
    }
  };

export default consultaAnosUseCase;
