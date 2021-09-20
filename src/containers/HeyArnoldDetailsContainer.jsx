import React, { Component } from 'react';
import { findOneCharacter } from '../services/heyArnoldAPI';
import { useParams } from 'react-router-dom';

export default class HeyArnoldDetails extends Component {
    state = {
        loading: true,
        character: {},
    };

    componentDidMount() {
        const { id } = useParams();
        findOneCharacter(id).then((character) => this.setState({ character, loading: false })
        );
    }

    render() {
        const { loading, character } = this.state;
        const { id, name, image } = character;

        if (loading) {
            return (
                <img src="https://wirdd.in/kanye/gifs/head.gif" alt="loading spinner"
                />
            );
        }
        return (
            <>
                <p>{name}</p>
                <p>{image}</p>
            </>
        );
    }
}