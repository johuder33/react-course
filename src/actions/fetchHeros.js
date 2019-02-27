import { setHeroes, setLoading, setTotals} from "./heroAction";

export const getHero = () => {

    return dispatch => {
        dispatch(setLoading(true))
        fetch('https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b')
            .then(function (response) {
                return response.json();
            })
            .then(data => {
                const {results, ...pagination} = data.data;
                dispatch(setTotals(pagination))
                dispatch(setHeroes(results));
                dispatch(setLoading(false));
            });
    }
}


export const searchHero = (text) => {

    const query = (text) ? '&name='+text : ''

    return dispatch => {
        dispatch(setLoading(true))
        fetch('https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b' + query)
            .then(function (response) {
                return response.json();
            })
            .then(data => {
                const {results, ...pagination} = data.data;
                dispatch(setTotals(pagination))
                dispatch(setHeroes(results));
                dispatch(setLoading(false));
            });
    }
}