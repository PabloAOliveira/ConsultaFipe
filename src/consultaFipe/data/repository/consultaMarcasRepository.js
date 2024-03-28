import { Marcas } from "@/consultaFipe/domain/model/marcas";

const consultaMarcasRepository = (axios) => async (tipoVeiculo) => {
    try {
        const response = await axios.get(`/${tipoVeiculo}/marcas`);

        return response?.data?.map((marcas) => new Marcas(marcas)) ?? [];
    } catch (error) {
        throw error;
    }
};

export default consultaMarcasRepository;