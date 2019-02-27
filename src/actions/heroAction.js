import {ADD_HEROES, SET_LOADING,GET_HEROES, SET_TOTALS} from "../constants"
export const setHeroes = (heroes)=>{
    return {
        type: ADD_HEROES,
        payload: {heroes}
    }
}
export const setLoading = (loading)=>{
    return {
        type: SET_LOADING,
        payload: {loading}
    }
}
export const getHeroes = ()=>{
    return{
        type:GET_HEROES
    }
}

export const setTotals = (payload) => {
    return{
        type: SET_TOTALS,
        payload
    }
}