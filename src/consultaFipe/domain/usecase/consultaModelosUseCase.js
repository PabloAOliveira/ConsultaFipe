const consultaModelosUseCase = (repository) => async (tipoVeiculo, idTipoVeiculo) => {
    try {
        return await repository(tipoVeiculo, idTipoVeiculo);
    } catch (error) {
        throw error;
    }
};

export default consultaModelosUseCase;