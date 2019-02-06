import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


export default class CardHero extends Component{
    constructor(props){
        super(props);
        const state = {
            loading: false
        }
    }

    render(){
        // {!is}
        return(<div>
            <Card>
            <CardHeader>
                
            </CardHeader>

            </Card>
        </div>);
    }

}