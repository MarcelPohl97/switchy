import styled from 'styled-components';

const NavAnchor = styled.a`
    font-size: 1rem;
    text-decoration: none;
    background-color: transparent;
    color: #51525E;
    transition: all .2s ease-in-out;
    padding: 1rem;
    font-weight:700;
    border-radius: 5px;
    cursor:pointer;
    &:not(:last-child) {
        margin-right: .5rem;
    }
    &:hover {
        color: #070919;
        background: rgba(60,68,177,.06);
    }
`;

export default NavAnchor;