import React from 'react';
import CardComponent from './CardComponent';

let CardListComponent = ({
    cards
}) => (
        <ul>
            {cards.map((card, i) =>
                <CardComponent
                    key={card.id}
                    index={i}
                    {...card}
                />
            )}
        </ul>
    )

export default CardListComponent;
