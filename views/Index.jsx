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
          {pokemon.map((pokemon, id) => {
            return (
              <div>
                <h1>{pokemon.name}</h1>;
                <a href={`/pokemon/${id}`}>
                  <img src={pokemon.img} alt={pokemon.name} />
                </a>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
