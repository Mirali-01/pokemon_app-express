import React, { Component } from "react";
import pokemon from "../models/pokemon";

const myStyle = {
  display: "flex",
  "flex-direction": "column",
  "justify-content": "center",
  "align-items": "center",
  color: "black",
  "text-transform": "capitalize",
};

const allPokemon = {
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  "flex-wrap": "wrap",
};

const pokemonInfo = {
  height: "50vh",
  width: "50vh",
  padding: "4vh",
  "line-height": 0,
};

const imgBoxStyle = {
  display: "flex",
  "flex-direction": "column",
  "justify-content": "center",
  height: "60vh",
  width: "60vh",
};

const pokeImg = {
  //   border: "solid",
  height: "100%",
  width: "100%",
};

export class Index extends Component {
  render() {
    return (
      <div style={myStyle}>
        {/* <h1>See All The Pokemon</h1> */}
        <div className="imgBox" style={imgBoxStyle}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/538px-International_Pok%C3%A9mon_logo.svg.png?20150121202211"
            alt=""
          />
          <img
            src="https://www.giantbomb.com/a/uploads/scale_super/0/1481/2897229-9939923796-latest"
            alt=""
          />
        </div>

        <div style={allPokemon}>
          {pokemon.map((pokemon, id) => {
            return (
              <div style={pokemonInfo} key={id}>
                <h1>{pokemon.name}</h1>
                <a href={`/pokemon/${id}`}>
                  <img
                    style={pokeImg}
                    src={pokemon.img + ".jpg"}
                    alt={pokemon.name}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

module.exports = Index;
