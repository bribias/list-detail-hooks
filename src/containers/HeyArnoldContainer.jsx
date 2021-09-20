import React, { Component } from 'react';
import { findCharacters } from '../services/heyArnoldAPI';
import CharacterList from '../components/characters/CharacterList';

export default class HeyArnoldContainer extends Component {
    state = {
        loading: true,
        characters: [],
    };

    componentDidMount() {
        findCharacters().then((characters) => this.setState({ characters, loading: false })
        );
    }

    render() {
        const { loading, characters } = this.state;
        if (loading) {
            return (
                <img src="https://i.imgur.com/B8SSY5p.gif" alt="loading spinner"
                />
            );
        }
        return <CharacterList characters={characters} />
    }
};