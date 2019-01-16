import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';


export default class Content extends Component{
    render(){
        return (
        <Switch>
          <Route exact path={"/"} component={()=><div>Aqui va un componente #1</div>} />
          <Route exact path={"/users"} component={()=><div>Aqui va un componente #2</div>} />
          <Route exact path={"/config"} component={()=><div>Aqui va un componente #3</div>} />
        </Switch>
        )
    }
}




