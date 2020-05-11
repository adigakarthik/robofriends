import React from 'react';
import Card from './card';

const CardList = ({robots}) =>{
    
    const cardArray = robots.map(user=>{
        return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
    });
    return (
        <section>
          {cardArray}
        </section>

    );
}

export default CardList;