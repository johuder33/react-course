import React, { Component } from "react";
import List from "@material-ui/core/ListSubheader";
import { green } from "@material-ui/core/colors";
import CardHero from "./CardHero";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { getHeroes} from "../actions/heroAction"


class ListHero extends Component {

    constructor(props) {
        super(props);
    }
    getHeros(){
        const {loadHeroes} = this.props;
        loadHeroes();
    }
    componentDidMount() {
        const { heroes } = this.props;
        // if(heroes.length < 1){
            if(heroes){
            this.getHeros();
        }
    }
    render() {
        const { heroes, loading } = this.props;
        if (loading) {
            console.log(heroes);
        }
        return (<div>
            {}
            <CardHero></CardHero>
            {/* {!isLoaded && <div style={{color:green}}></div>} */}
            {/* {error && <div style={{ color: "red" }}>{error}</div>} */}
            {/* <ul>
                {hero.map(hero =>
                    <li key={hero.objectID}>
                        <a href={hero.url}>{hit.title}</a>
                    </li>
                )}
            </ul> */}
        </div>)
    }

}
const MapStateToProps = (state)=>{

    const {heroes} = state;
    const {byIds, ids, loading} = heroes;
    return {
        loading,
        heroes: ids.map((id)=>{
            return byIds[id]
        })
    }
}
const MapDispatchToProps = (dispatch)=>{

    return {
        // anteriormente
        // setHeroes: (heroes) => dispatch(setHeroes(heroes)),
        // setLoading: (loading)=>dispatch(setLoading(loading))
        // ahora
        loadHeroes:()=> dispatch(getHeroes())
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(ListHero)