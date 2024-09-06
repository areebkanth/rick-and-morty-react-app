import React from "react";
import "./CharacterCard.css";
import { FaLocationArrow, FaClock } from "react-icons/fa"; // Import icons

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p><FaLocationArrow /> Last Location: {character.location.name}</p> {}
      <p><FaClock /> Created: {new Date(character.created).toLocaleDateString()}</p> {}
    </div>
  );
}

export default CharacterCard;
