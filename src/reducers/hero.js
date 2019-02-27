import {SET_TOTALS} from "../constants";
const initialState = {
    byIds: {},
    ids: [],
    loading: false,
    pagination:{
        count: 0,
        limit: 0, 
        offset:0,
        total: 0
    }

}
const HeroesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    let nextState;
    switch (type) {
        case 'ADD_HEROES': {
            // state.ids = payload.heroes;
            // nextState = state;
            // lo anterior es mutar NO HACER
            const {heroes} = payload;
            const ids = heroes.map((hero)=>{
                return hero.id;
            });
            const byIds = heroes.reduce((byIds, hero)=>{
                byIds[hero.id] = hero;
                return byIds
            },{})
            nextState = {...state, ids:ids, byIds:byIds};
            return nextState;
        }
        case SET_TOTALS:{
            nextState = {...state, pagination:payload}
            return nextState;
        }
        case 'SET_LOADING': {
            // nextState = state;
            nextState = {...state, loading:payload.loading}
            return nextState;
        }
        default:
            return state;
            
    }
}

export default HeroesReducer;