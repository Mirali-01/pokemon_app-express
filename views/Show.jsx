import React, { Component } from "react";

const myStyle = {
  display: "flex",
  "flex-direction": "column",
  "align-items": "center",
  color: "black",
  "text-align": "center",
  "text-transform": "capitalize",
};

const pokeballStyle = {
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  "border-color": "transparent",
  height: "6vh",
  width: "6vh",
  "border-radius": "3vh",
  cursor: "pointer",
};

const imgCircle = {
  border: "solid",
  height: "5vh",
  width: "5vh",
  "border-radius": "50%",
};

export class Show extends Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div style={myStyle}>
        {/* <h1>Gotta Catch 'Em All</h1> */}
        <img
          src="https://www.impericon.com/780x240x90/media/impericon/header/entertainment/pok%C3%A9mon/20161101_pokemon_mobile@2x.jpg"
          alt=""
        />
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.img + ".jpg"} alt={pokemon.name} />
        </div>
        <br />
        <a href="/pokemon">
          <button style={pokeballStyle}>
            <img
              style={imgCircle}
              src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c31e.png"
              alt=""
            />
          </button>
        </a>
      </div>
    );
  }
}

module.exports = Show;
