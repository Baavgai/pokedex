import React from 'react';
import { capitalize } from '../helpers';

const Container = ({ children }) =>
    <div className="card-back">{children}</div>;

// this is fundamenally wrong
// const Sub = ({ className, children }) => <h4 className={className}>{children}</h4>;
// const Sub2 = ({ className, children }) => <h2 className={className}>{children}</h2>;
// figure it out in styles
const Sub = ({ className, children }) => <div className={`${className || ''} card-sub`}>{children}</div>;
const Sub2 = ({ className, children }) => <div className={`${className || ''} card-sub2`}>{children}</div>;

const Head = ({ name, id }) =>
    <>
        <Sub className="back-name">{name ? capitalize(name) : "Loading..."}</Sub>
        {name && <img className="poke-pic2" alt="critterpic" src={`http://www.pokestadium.com/sprites/xy/${name}.gif`} />}
        <Sub className="back-num">#{id || ""}</Sub>
    </>;

const Moves = ({ move1, move2 }) =>
    <Sub className="moves">
        <Sub2>Moves</Sub2>
        <li className="move-list">{move1}</li>
        <li className="move-list2">{move2}</li>
    </Sub>;


const Types = ({ types }) =>
    <Sub className="types type-list">
        <Sub2 className="type-head">Types</Sub2>
        {!types ? <></> : types.map((type, i) => <li key={i} className="list-items">{capitalize(type.type.name)}</li>)}
    </Sub>


const Loaded = ({ details }) =>
    <Container>
        <Head name={details.name} id={details.id} />
        <Moves
            move1={capitalize(details.moves[0].move.name)}
            moves2={capitalize(details.name === 'ditto' ? '' : details.moves[1].move.name)}
        />
        <Types {...details} />
    </Container>
    ;

const NotLoaded = () =>
    <Container>
        <Head />
        <Moves />
        <Types />
    </Container>
    ;


export const CardBack = ({ details }) =>
    !details ? <NotLoaded /> : <Loaded details={details} />;


/*
const Loaded = ({ details }) =>
<Container>
    <Sub className="back-name">{capitalize(details.name)}</Sub>
    <img className="poke-pic2" alt="critterpic" src={`http://www.pokestadium.com/sprites/xy/${details.name}.gif`} />
    <Sub className="back-num">#{details.id}</Sub>
    <Sub className="moves">
        <Sub2>Moves</Sub2>
        <li className="move-list">{capitalize(details.moves[0].move.name)}</li>
        <li className="move-list2">{capitalize(details.name === 'ditto' ? '' : details.moves[1].move.name)}</li>
    </Sub>
    <Sub className="types type-list">
        <Sub2 className="type-head">Types</Sub2>
        {details.types.map((type, i) => <li key={i} className="list-items">{capitalize(type.type.name)}</li>)}
    </Sub>
</Container>
;
*/
