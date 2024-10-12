import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({characterId}) => {
    const publicKey = "cd1f3cea10689ef6a9cdb6be5d474701";
    const md5Hash = "b4e9b90e7891248759965be01c080bf8";
    const url = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${publicKey}&hash=${md5Hash}`;
    const [characterDetails, setCharacterDetails] = useState([]);
    useEffect(() => {
        fetchCharacterDetails();
    }, [characterId]);

    const fetchCharacterDetails = async () => {
        try {
            const response = await axios.get(url);
            setCharacterDetails(response.data.data.results[0]);
            
        } catch (error) {
            console.log("Error fetching characters:", error)
        }
    }

    return (
        <div>
            <h3>{characterDetails.name}'s Details</h3>
            <p>{characterDetails.description || "No description available."}</p>
            <h4>Associated Comics:</h4>
            <ul>
                {characterDetails.comics ? characterDetails.comics.items.map((comic, index) => (
                    <li key={index}>{comic.name}</li>)) : "Oops, no comics"}
            </ul>
        </div>
    )
}

export default CharacterDetail;
