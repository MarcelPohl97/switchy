import React, { useEffect, useCallback, useState } from "react";
import styled from 'styled-components';
import SwitchyCard from './switchycard';


const SwitchContainer = styled.div`
    color: #070919;
    margin-bottom: -2rem;
    margin-top: 1rem;
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

const SwitchyPublisher = styled.h2`
    font-size: 2.5rem;
    color:#333;
    margin-top: 5rem;
    border-bottom: 5px solid #4191FF;
    display:inline-block;
`

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-react-card-carousel-component
 */


//switchys -> name, date, publish, 
//switchyobjects

const SwitchCarousel = ({switchyItems}) => {
  const [intervaltime, setIntervalTime] = useState(4000);
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleCardTransition = useCallback(() => {
    if (indexes.currentIndex >= switchyItems.length - 1) {
      setIndexes({
        previousIndex: switchyItems.length - 1,
        currentIndex: 0,
        nextIndex: 1
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === switchyItems.length
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
        {switchyItems.map((card, index) => (
            <SwitchyCard card={card} index={index} indexes={indexes} />
        ))}
      </SwitchCarouselContainer>
      <SwitchyPublisher></SwitchyPublisher>
    </SwitchContainer>
  );
};

export default SwitchCarousel;