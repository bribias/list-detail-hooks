import React from 'react';
import PropTypes from 'prop-types'

const Character = ({ name, image }) => (
    <>
        <p>{name}</p>
        <img src={image} alt="character image" />
    </>
);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Character;