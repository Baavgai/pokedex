import React from 'react';
import pokeLogo from './Photos/pokeLogo.png';
import pokeBall from './Photos/pokeball.png';
import { capitalize } from '../helpers';

const Frontcard = ({ name }) => {
    // console.log({f: "Frontcard", name});

    return (
        <div className={"card-front"}>
            <h4 className={'pokename'}>{capitalize(name)}</h4>
            <img className={'poke-pic'} src={`http://www.pokestadium.com/sprites/xy/${name}.gif`} alt={'pokesprite'}></img>
            <img className={'logo'} src={pokeLogo} alt={'pokelogo'}></img>
            <img className={'pokeball'} src={pokeBall} alt={'pokeball'}></img>
        </div>);
};

export default Frontcard;