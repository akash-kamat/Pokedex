import React, { Component } from 'react'
import './Card.css'
export default class Card extends Component {
    render() {
        return (
            <a href={`https://pokemon.gameinfo.io/en/pokemon/${this.props.id}`} target="_blank" rel="noreferrer">
                <div className="card" id={this.props.id}>

                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.props.id}.svg`} alt="" />
                    <h1>{this.props.name}</h1>
                </div>
            </a>
        )
    }
}
