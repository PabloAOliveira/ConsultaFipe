const retornaDadosFipeUseCase = (repository) => async (tipoVeiculo, idTipoVeiculo, idModelo, ano) => {
    try {
        return await repository(tipoVeiculo, idTipoVeiculo, idModelo, ano);
    } catch (error) {
        throw error;
    }
};

export default retornaDadosFipeUseCase;