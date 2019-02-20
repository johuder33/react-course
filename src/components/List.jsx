import React, { Component } from "react";
import CardHero from "./CardHero";
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from "react-redux";
import { getHeroes } from "../actions/heroAction"


class ListHero extends Component {

    constructor(props) {
        super(props);
    }
    getHeros() {
        const { loadHeroes } = this.props;
        loadHeroes();
    }
    componentDidMount() {
        const { heroes } = this.props;
        // if(heroes.length < 1){
        if (heroes) {
            this.getHeros();
        }
    }
    render() {
        const { heroes, loading } = this.props;
   
        return (<div>
            {loading && <LinearProgress/>}
            {!loading && <CardHero hero={heroes}>

            </CardHero>}
        </div>)
    }

}
const MapStateToProps = (state) => {

    const { heroes } = state;
    const { byIds, ids, loading } = heroes;
    return {
        loading,
        heroes: ids.map((id) => {
            return byIds[id]
        })
    }
}
const MapDispatchToProps = (dispatch) => {

    return {
        // anteriormente
        // setHeroes: (heroes) => dispatch(setHeroes(heroes)),
        // setLoading: (loading)=>dispatch(setLoading(loading))
        // ahora
        loadHeroes: () => dispatch(getHeroes())
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(ListHero)