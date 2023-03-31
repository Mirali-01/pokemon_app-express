import React, { Component } from "react";
import pokemon from "../models/pokemon";

const myStyle = {
  color: "black",
  "text-align": "center",
  "text-transform": "capitalize",
};

export class Show extends Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All</h1>
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.img + ".jpg"} alt={pokemon.name} />
        </div>
        <a href="/pokemon">Back</a>
      </div>
    );
  }
}

module.exports = Show;
