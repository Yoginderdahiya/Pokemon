import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
 
class Pokedex extends Component{

    render(){
        return(
            <div className='Pokedex'> 
                <p>  Total Experience: {this.props.experience}</p>
                <p> {this.props.isWinner ? 'Winner' : 'Loser'} </p>
                <div className='Pokedex-cards'>
                {this.props.pokemon.map((p) => ( <Pokecard id={p.id} name={p.name} type={p.type} experience={p.experience} />
                ))}
                </div>
            </div>
        )

    }
}
export default Pokedex;