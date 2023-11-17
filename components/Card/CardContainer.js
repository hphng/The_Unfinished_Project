import React, { useState } from 'react';

import Card from './Cards';

const CardContainer = () => {
    const [cards, setCards] = useState([]);
    const [cardContent, setCardContent] = useState('');

    const handleAddCard = () => {
        if (cardContent.trim() !== '') {
            setCards([...cards, cardContent]);
            setCardContent('');
        }
    };

    return (
        <div>
            <div className="mb-4">
                <input
                    type="text"
                    value={cardContent}
                    onChange={(e) => setCardContent(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button
                    onClick={handleAddCard}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Add Card
                </button>
            </div>
            <div className="flex flex-wrap">
                {cards.map((card, index) => (
                    <Card key={index} content={card} />
                ))}
            </div>
        </div>
    );
};

export default CardContainer;
