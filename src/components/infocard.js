import React from 'react';
import styled from 'styled-components';

/*Styles */
import PrimaryHeader from './styles/primaryheader';
import SubHeader from './styles/subheader';
import Button from './styles/button';


const InfoContainer = styled.div`
    background: #FFFFFF;
    border-radius: 10px;
    width: 100%;
    padding: 1.25rem 1rem;
    box-shadow: 0 .18rem .3rem rgba(166,166,185,.5),0 .326rem 3rem rgba(122,123,151,.3);
    text-align:center;
    &:not(:last-child) {
        margin-right:3rem;
    }
    
    &.green {
        border-top: 3px solid #1BC943;
    }

    &.blue {
        border-top: 3px solid #4191FF;
    }

    &.orange {
        border-top: 3px solid #F4772E;
    }

`


const InfoCard = ({info}) => {
    return (
        <InfoContainer className={info.color}>
            <PrimaryHeader className={"small"}>{info.title}</PrimaryHeader>
            <SubHeader className={"small"}>{info.info}</SubHeader>
            <Button className={info.btn}>Find out more</Button>
        </InfoContainer>
    )
}

export default InfoCard;