import React from 'react';
import styled from 'styled-components';

const Switchy = styled.li`
    background: #FFFFFF;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
    width: 420px;
    height: 200px;
    transition: all 2s ease-in;
    opacity: 0;
    position: absolute;
    transform: scale(0.85) translateY(50px);
    &.active {
        opacity: 1;
        transform: scale(1.1) translateX(0);
        box-shadow: 0 30px 20px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
    &.next {
        opacity: 1;
        z-index: 0;
    }

    &.prev {
        transform: scale(1.1) translateX(500px);
        z-index: 2;
        opacity: 0;
    }
`;

const SwitchyText = styled.p`
    font-size: 1.25rem;
    text-align: center;
    color: #333;
`;

const SwitchyCard = ({card, indexes, index}) => {

    const determineClasses = (indexes, cardIndex) => {
        if (indexes.currentIndex === cardIndex) {
          return "active";
        } else if (indexes.nextIndex === cardIndex) {
          return "next";
        } else if (indexes.previousIndex === cardIndex) {
          return "prev";
        }
        return "inactive";
      }
    return (
        <Switchy key={card.id} className={`${determineClasses(indexes, index)}`}>
            <SwitchyText>{card.text}</SwitchyText>
        </Switchy>
    )
}

export default SwitchyCard;