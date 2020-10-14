import React, { useEffect, useCallback, useState } from "react";
import styled from 'styled-components';
import SwitchyCard from './switchy';
import ShoulderPressUp from '../images/dumbbell.svg';
import InvertedRow from '../images/pull_up_bar.svg';
import SitUp from '../images/sit_up.svg';
import Squat from '../images/squat.svg';
import TricepDips from '../images/tricep.svg';

const SwitchContainer = styled.div`
    color: #070919;
    margin: 1rem;
    font-size: 2.5rem;
    line-height: 1.4;
    font-weight:700;
    text-align: center;
`;
const SwitchCarouselContainer = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 200px;
    margin: 100px auto;
    align-items: center;
    position: relative;
`;

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-react-card-carousel-component
 */

const cardItems = [
  {
    id: 1,
    text: "Shoulder Press Up",
    image: ShoulderPressUp
  },
  {
    id: 2,
    text: "Inverted Row",
    image: InvertedRow
  },
  {
    id: 3,
    text: "Sit Up",
    image: SitUp
  },
  {
    id: 4,
    text: "Squat",
    image: Squat
  },
  {
    id: 5,
    text: "Tricep Dips",
    image: TricepDips
  }
];

const SwitchCarousel = () => {
  const [intervaltime, setIntervalTime] = useState(4000);
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2
      }));
    }
  }, [indexes.previousIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, intervaltime);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes, intervaltime]);

  return (
    <SwitchContainer>
      <SwitchCarouselContainer>
        {cardItems.map((card, index) => (
            <SwitchyCard card={card} index={index} indexes={indexes} />
        ))}
      </SwitchCarouselContainer>
    </SwitchContainer>
  );
};

export default SwitchCarousel;