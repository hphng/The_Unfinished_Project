import React, { useState } from 'react';
import * as AiIcons from "react-icons/ai";
import PlusButton from './PlusButton';
import "./CardContainer.module.css";
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
                <AiIcons.AiFillPlusCircle
                    onClick={handleAddCard}
                    style={{ fontSize: '24px', cursor: 'pointer' }}
                    className='plus-icon' />
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
