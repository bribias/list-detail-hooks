import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Character from '../components/characters/Character';
import { findOneCharacter } from '../services/heyArnoldAPI';

const HeyArnoldDetailsContainer = () => {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState({});
    const { id } = useParams();

    
}