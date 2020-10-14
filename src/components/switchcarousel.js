import React, { useEffect, useCallback, useState } from "react";
import styled from 'styled-components';
import SwitchyCard from './switchy';

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
    title: "Stacked Card Carousel",
    copy: "1"
  },
  {
    id: 2,
    title: "Second Item",
    copy: "2"
  },
  {
    id: 3,
    title: "A Third Card",
    copy: "3"
  },
  {
    id: 4,
    title: "Fourth",
    copy: "4"
  },
  {
    id: 5,
    title: "Fifth",
    copy: "5"
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