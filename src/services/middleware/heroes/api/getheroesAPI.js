import { getHeroes, setHeroes, setLoading } from "../../../../actions/heroAction";
// import {} from "../.."

export const getHeroeAPI = (next) => {
    next(setLoading(true));
    fetch('https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b')
        .then(function (response) {
            return response.json();
        })
        .then(data => {
           
            next(setHeroes(data.data.results));
            next(setLoading(false));
           
        });
};
