import React from 'react';
import { Card } from './Card';
import { useFetch } from '../helpers';

const Loaded = ({ pokemon }) =>
    <>
        {
            pokemon.map((poke, index) =>
                <Card key={index} {...poke} />)
        }

    </>;


export const CardContainer = () => {
    const [fetchResult, loading] = useFetch('https://pokeapi.co/api/v2/pokemon/?limit=10');

    /*
    const handleClick = e =>
        e.currentTarget.firstChild.style.transform !== 'rotateY(180deg)'
            ? e.currentTarget.firstChild.style.transform = 'rotateY(180deg)'
            : e.currentTarget.firstChild.style.transform = ''
        ;
        */

    console.log({ fetchResult, loading });
    const pokemon = loading ? undefined : fetchResult.results;

    return !pokemon ? <></> : <Loaded pokemon={pokemon} />;
};
