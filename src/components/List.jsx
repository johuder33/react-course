import React, { Components, Component } from "react";
import List from "@material-ui/core/ListSubheader";
import { green } from "@material-ui/core/colors";

export default class listHero extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false
        };
    }

    componentWillMount(){
        const {loadedCard} = this.state.isLoaded;
    }
    componentDidMount() {
        fetch('https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b')
            .then(function (response) {
                return response.json();
            })
            .then(data => this.setState({data:data.data, isLoaded:true}));
    }
    render() {
        const { data, isLoaded } = this.state;

        if(isLoaded){
            console.log(data.results); console.log('is', isLoaded);
           
        }
        
        
        return (<div>
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