export const setHeroes = (heroes)=>{
    return {
        type: "ADD_HEROES",
        payload: {heroes}
    }
}
export const setLoading = (loading)=>{
    return {
        type: "SET_LOADING",
        payload: {loading}
    }
}