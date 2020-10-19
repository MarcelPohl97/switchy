import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    box-sizing:border-box;
    
    &.direction-column {
        flex-direction:column;
    }

    &.content-center {
        justify-content:center;
    }

    &.item-center {
        align-items:center;
    }

    &.mb-6 {
        margin-bottom:6rem;
    }

    &.mtb-3 {
        margin: 1.5rem 0;
    }

    &.w-100 {
        width:100%;
    }
    &.not-last {
        &:not(:last-child) {
            margin-bottom: 2rem;
        }
    }
`;

export default Wrapper;