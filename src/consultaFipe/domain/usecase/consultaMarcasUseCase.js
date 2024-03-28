const consultaMarcasUseCase = (repository) => async (tipoVeiculo) => {
    try {
        return await repository(tipoVeiculo);
    } catch (error) {
        throw error;
    }
};

export default consultaMarcasUseCase;