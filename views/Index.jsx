import React, { Component } from "react";
import pokemon from "../models/pokemon";

const myStyle = {
  color: "whitesmoke",
  backgroundColor: "#000000",
  "text-align": "center",
  "text-transform": "capitalize",
};

export class Index extends Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon</h1>
        <ul>
          {pokemon.map((pokemon) => {
            return (
              <div>
                <h1>{pokemon.name}</h1>;
                <img src={pokemon.img} alt={pokemon.name} />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
