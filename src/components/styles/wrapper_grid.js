import styled from 'styled-components';

const WrapperGrid = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    margin: 4rem 0;
` ;

export default WrapperGrid;