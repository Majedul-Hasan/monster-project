import React from 'react';
import './CardList.css';
import {Card} from '../card/Card'

export const CardList = props =>{
   console.log(props);
   return <div className="card-list">  
       {
        props.monsters.map(monster=><Card kye={monster.id}  monster={monster} />)
         // <h1 key={monstaer.id} >{monstaer.name }</h1>
         
         // )
      }
   {/*  */}

</div>
}

