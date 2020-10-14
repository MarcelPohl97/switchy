import styled from 'styled-components';

const Section = styled.section`
    padding: ${props => props.primary ? "7rem 20rem" : "0 20rem 7rem 20rem"};
`;

export default Section;