import React from 'react';
import joueur from './joueur';

const PlayersList = () => {
    return (
        <div className='cardplayer'>
            {joueur.map((joueur, index) => (
                <player key={index} {...joueur} />
            ))}
        </div>
    )

};








export default PlayersList;
