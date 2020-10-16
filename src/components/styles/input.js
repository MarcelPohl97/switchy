import styled from 'styled-components';

const Input = styled.input`
    width:100%;
    padding: 1.1rem;
    font-size: 1rem;
    border: 1px solid #C4C4C4;
    transition: all .2s;
    box-sizing:border-box;
    border-radius: 3px;
    margin-top: .5rem;
    :hover {
        border: 1px solid #4191FF;
    }
    :focus {
        outline:1px solid #4191FF;
        border: 1px solid #4191FF;
        box-shadow: 0 .18rem .3rem rgba(166,166,185,.5),0 .326rem 3rem rgba(122,123,151,.3);
    }
`

export default Input;