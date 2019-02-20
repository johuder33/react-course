// 1 Este necesita saber a que evento va a reaccionar o escuchar
// 2 necesita saber que evento despachar una vez que el evento que escucha suceda
// los nombres de los eventos son constantes

import {executeHandler} from "./api"

// el primer parametro de la primera funcion recibe el store
// el segundo es un dispathc que comunmente se llama next
// y por ultimo va a recibir la accion que se esta ejecutando en ese momento
export const heroesService = (store)=>(next)=>(action)=>{
const {type} = action;
const handler = executeHandler(type);

handler(next, action);

    // const {type} = action;
    // if(type === GET_HEROES){
    //     // HAREMOS ALGO
      
    //     // una vez importadas las acciones se requiere despachar con
    //     // next()
    //     next(setLoading(true));
    //     fetch('https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b')
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(data => {
    //            next(setHeroes(data.data.results));
    //             next(setLoading(false));
    //         });
    //     console.log("atrape la accion", action);
    //     return;
    // }
    // // como next es un dispatch, volvemos a despachar la accion que no nos interesa
    // next(action);
};
// por cada servicio que se tenga presente a implementar se debe crear un middleware 
// middleware por URL por ejemplo, para ser mas especifico por dominio
// un solo middleware por esto por ejemplo
// api/id
// api/all
