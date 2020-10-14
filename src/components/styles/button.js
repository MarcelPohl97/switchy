import styled from 'styled-components';

const Button = styled.button`
    font-size: 1rem;
    text-transform:uppercase;
    text-decoration: none;
    background-color: #4191FF;
    color: #FFFFFF;
    transition: all .2s ease-in-out;
    padding: .8rem 1.5rem;
    box-shadow: 0 0.25rem 0.55rem rgba(65,145,255,.35);
    font-size: .9rem;
    font-weight:700;
    border-radius: 5px;
    cursor:pointer;
    display:inline-block;
    border:none;
    letter-spacing: -.05rem;
    &:not(:last-child) {
        margin-right: .5rem;
    }
    &:hover {
        transform: translateY(-3px);
    }
    &:focus {
        outline: none;
    }
    &:active {
        transform: translateY(0);
    }
`;

export default Button;