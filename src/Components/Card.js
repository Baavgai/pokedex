import React, { useEffect} from 'react';
import { CardBack as Back } from './CardBack';
import { capitalize } from '../helpers';
import pokeLogo from './Photos/pokeLogo.png';
import pokeBall from './Photos/pokeball.png';


const Front = ({ name }) =>
    <div className="card-front">
        <h4 className="pokename">{capitalize(name)}</h4>
        <img className="poke-pic" src={`http://www.pokestadium.com/sprites/xy/${name}.gif`} alt="pokesprite" />
        <img className="logo" src={pokeLogo} alt="pokelogo"></img>
        <img className="pokeball" src={pokeBall} alt="pokeball"></img>
    </div>
    ;

export const Card = ({ name, url }) => {
    const [flips, setFlips] = React.useState(0);
    const [details, setDetails] = React.useState(undefined);
    useEffect(() => {
        if (flips === 1) {
            let cancelled = false;
            fetch(url)
                .then(x => x.json())
                .then(x => { if (!cancelled) { setDetails(x); } });
            return () => { cancelled = true; };
        }
    }, [url, flips]);
    const front = (flips % 2) === 0;
    console.log({f: "card", name, flips, details})
    return (
        <div className="flip-container" onClick={e => setFlips(flips + 1)}>
            <div className="card-container" style={{ transform: front ? "" : "rotateY(180deg)" }} >
                <Front name={name} />
                <Back details={details} />
            </div>
        </div>
    );
};

/*
export const Card = ({name, url}) => {
    return (
        <div className="flip-container" onClick={e => {
            console.log({f: "flip-container", tr: e.currentTarget.firstChild.style.transform });
             e.currentTarget.firstChild.style.transform !== 'rotateY(180deg)'
                ? e.currentTarget.firstChild.style.transform = 'rotateY(180deg)'
                : e.currentTarget.firstChild.style.transform = ''

        }}>
            <div className="card-container">
                <Front name={name} />
                <Back url={url} />
            </div>
        </div>
    );
}

*/