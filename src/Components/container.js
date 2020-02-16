import React, { useState, useEffect } from 'react';
import Frontcard from './frontCard';
import Backcard from './backCard';
// import { capitalize } from '../helpers';

const Card = ({name, details, handleClick}) =>
    <div onClick={handleClick} className="flip-container">
        <div className="card-container">
            <Frontcard name={name} />
            <Backcard details={details} />
        </div>
    </div>;

const Cardcontainer = () => {
    const [namesUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=10');
    const [state, setState] = useState({
        pokemon: [],
        cardBack: []
    });
    useEffect(() => {
        const doit = async () => {
            const response = await fetch(namesUrl);
            const json = await response.json();
            console.log(json);

            const pokemon = json.results;
            // console.log(json.results);
            // setState({ ...state, pokemon: pokemon });

            Promise.all(pokemon.map(({ url }) => fetch(url).then(res => res.json())))
                .then(cardBack => setState({ pokemon, cardBack }));
        };
        doit();
    }, [namesUrl]);

    const handleClick = e =>
        e.currentTarget.firstChild.style.transform !== 'rotateY(180deg)'
            ? e.currentTarget.firstChild.style.transform = 'rotateY(180deg)'
            : e.currentTarget.firstChild.style.transform = ''
        ;

    console.log(state);
    return (
        <>
            {state.pokemon.map((poke, index) =>
                <Card key={index} name={poke.name} details={state.cardBack[index]} handleClick={handleClick} />
            )}
        </>
    );
};

export default Cardcontainer;
