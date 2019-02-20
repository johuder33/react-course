import React, { Component } from "react";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';



export default class CardHero extends Component {
    constructor(props) {
        super(props);
    }

    handlerPic(thumb) {
        return thumb.path + '.' + thumb.extension;
    }
    handlerText(text) {
        return text ? text : 'SIN DESCRIPCION';
    }

    render() {
        const { hero } = this.props;
        return (<div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden'
        }}>
            <GridList cellHeight={200}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Heroes</ListSubheader>
                </GridListTile>
                {hero.map(hit => (
                    <GridListTile key={hit.id}>
                        <img src={this.handlerPic(hit.thumbnail)} alt={hit.name} />
                        <GridListTileBar
                            title={this.handlerText(hit.description)}
                            subtitle={<span>Personaje: {hit.name}</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>);
    }

}