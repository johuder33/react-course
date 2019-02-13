const initialState = {
    byIds: {},
    ids: [],
    loading: false,

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