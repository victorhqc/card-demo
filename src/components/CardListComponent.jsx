import React from 'react';
import CardComponent from './CardComponent';

let CardListComponent = ({
    cards
}) => {
    console.log('cards!', cards);
    return (
        <ul>
            {cards.map(card =>
                <CardComponent
                    key={card.id}
                    {...card}
                />
            )}
        </ul>
    )
}

export default CardListComponent;
