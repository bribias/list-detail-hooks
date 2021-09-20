import React, { useState, useEffect } from 'react';
import { findCharacters } from '../services/heyArnoldAPI';
import CharacterList from '../components/characters/CharacterList';

const HeyArnoldContainer= () => {
    const[loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => (
        findCharacters()
            .then((charcters) => {
            setCharacters(charcters);
            })
        .finally(() => setLoading(false))
    ), []);
    if (loading) return (
        <img src="https://wirdd.in/kanye/gifs/head.gif" alt="loading spinner"
        />);
    
    return (
        <CharacterList characters={characters} />
    );
};