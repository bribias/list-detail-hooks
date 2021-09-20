import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Character from '../components/characters/Character';
import { findOneCharacter } from '../services/heyArnoldAPI';

const HeyArnoldDetailsContainer = () => {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState({});
    const { id } = useParams();

    useEffect(() => (
        findOneCharacter(id)
            .then((character) => {
                setCharacter(character);
            })
            .finally(() => setLoading(false))
    ), []);
    if (loading) return (
        <img src="https://wirdd.in/kanye/gifs/head.gif" alt="loading spinner"
        />);
    
    return (
        <>
            <Character
                name={character.name}
                image={image}
            />
            <Link to="/">
                <button aria-label="home-button">Home</button>
            </Link>
        </>
    );
};

export default HeyArnoldDetailsContainer;