import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = ({onCharacterSelect}) => {
    const publicKey = "cd1f3cea10689ef6a9cdb6be5d474701";
    const md5Hash = "b4e9b90e7891248759965be01c080bf8";
    const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${md5Hash}`;
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        try {
            const response = await axios.get(url);
            setCharacters(response.data.data.results);
        } catch (error) {
            console.log("Error fetching characters:", error)
        }
    }

    return (
        <div class="character-list">
            {characters.map((character) => (
            <div className="character-display" onClick={() => onCharacterSelect(character.id)} key={character.id}>
                    <h4 className="header">{character.name}</h4>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} className="character-image"/>
            </div>
            ))}
        </div>
    )
}

export default CharacterList;
