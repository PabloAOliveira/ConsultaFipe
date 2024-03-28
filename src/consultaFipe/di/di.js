import axiosInstance from './axios';

import consultaMarcasRepository from "../data/repository/consultaMarcasRepository";
import consultaMarcasUseCase from "../domain/usecase/consultaMarcasUseCase";
import consultaFipeController from "../controller/consultaFipeController";
import consultaModelosUseCase from "../domain/usecase/consultaModelosUseCase";
import consultaModelosRepository from '../data/repository/consultaModelosRepository';
import consultaAnosRepository from '../data/repository/consultaAnosRepository';
import consultaAnosUseCase from '../domain/usecase/consultaAnosUseCase';
import retornaDadosFipeRepository from '../data/repository/retornaDadosFipeRepository';
import retornaDadosFipeUseCase from '../domain/usecase/retornaDadosFipeUseCase';


const instance = axiosInstance;

const consultaMarcasRepositoryImpl = consultaMarcasRepository(instance);
const consultaMarcasUseCaseImpl = consultaMarcasUseCase(consultaMarcasRepositoryImpl);

const consultaModelosRepositoryImpl = consultaModelosRepository(instance);
const consultaModelosUseCaseImpl = consultaModelosUseCase(consultaModelosRepositoryImpl);

const consultaAnosRepositoryImpl = consultaAnosRepository(instance);
const consultaAnosUseCaseImpl = consultaAnosUseCase(consultaAnosRepositoryImpl);

const retornaDadosFipeRepositoryImpl = retornaDadosFipeRepository(instance);
const retornaDadosFipeUseCaseImpl = retornaDadosFipeUseCase(retornaDadosFipeRepositoryImpl)



const consultaFipeControllerImpl = consultaFipeController(consultaMarcasUseCaseImpl, consultaModelosUseCaseImpl, consultaAnosUseCaseImpl, retornaDadosFipeUseCaseImpl);


export { consultaFipeControllerImpl };