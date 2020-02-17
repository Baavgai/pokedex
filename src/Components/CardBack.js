import React from 'react';
// import pokeLogo from './Photos/pokeLogo.png';
// import pokeBall from './Photos/pokeball.png';
import { capitalize } from '../helpers';

const CardBackLive = ({ url }) => {
    const [fetchResult, loading] = useFetch(url);
    console.log({ f: "CardBackLive", fetchResult });
    return (
        <div className={"card-back"}>
            <h4 className={'back-name'}>{!details ? 'hi' : capitalize(details.name)}</h4>
            <img className={'poke-pic2'} alt="critterpic" src={!details ? 'loading...' : `http://www.pokestadium.com/sprites/xy/${details.name}.gif`} />
            <h4 className={'back-num'}>{!details ? 'loading' : '#' + (details.id)}</h4>
            <h4 className={'moves'}>
                <h2>Moves</h2>
                <li className={'move-list'}>{capitalize(!details.moves ? 'loading' : details.moves[0].move.name)}</li>
                <li className={'move-list2'}>{capitalize(!details.name ? '' : details.name === 'ditto' ? '' : details.moves[1].move.name)}</li>
            </h4>
            <h4 className="types type-list">
                <h2 className={'type-head'}>Types</h2>
                {!details
                    ? 'hi'
                    : details.types.map((type, i) => <li key={i} className={'list-items'}>{capitalize(type.type.name)}</li>)
                }
            </h4>
        </div>
    );
};

export const CardBack = ({ url, live }) =>
    <div className="card-back">
        {live ? <CardBackLive url={url} /> : <></>}
    </div>;