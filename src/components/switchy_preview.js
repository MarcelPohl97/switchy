import React from 'react';
import styled from 'styled-components';
import upper_wave from '../images/upper_wave.svg';
import down_wave from '../images/down_wave.svg';
import workout from '../images/workout.svg';

import {
    Link
  } from "react-router-dom";

const SwitchyPreviewCard = styled.div`
    height: 450px;
    background-color: #F5F7F9;
    box-shadow: 0 .18rem .3rem rgba(166,166,185,.5),0 .326rem 3rem rgba(122,123,151,.3);
    border-radius: 5px;
    position: relative;
    box-sizing: border-box;
    overflow-x:hidden;
    cursor:pointer;
    transition: transform .2s ease-in;
    &:hover {
        transform: scale(1.05);
    }
`
const SwitchyPreviewTop = styled.div`
    height:46%;
    position: absolute;
    top:0;
    left:0;
    width:100%;
    background: #4191FF;
    text-align: center;
`
const SwitchyPreviewTitle = styled.h5`
    font-size: 1.5rem;
    color: #FFFFFF;
`

const SwitchyPreviewCaption = styled.p`

    &.explain {
        font-size: 1.25rem;
        color: #DFE6EB;
        z-index: 100000 !important;
    }

    &.madeby {
        font-size: 1rem;
        color: #FFFFFF;
        z-index: 100000 !important;
    }
`

const SwitchyPreviewImage = styled.img`
    width: 618px;
    position: absolute;

    &.upper {
        bottom:-50%;
        left:0;
    }

    &.down {
        bottom:-56%;
        left:0;
    }

    &.main {
        width: 40%;
        bottom:2rem;
        left:50%;
        transform: translate(-50%, 0);
        z-index:4;
    }
    &.index-2 {
        z-index:2 !important;
    }

    &.index-1 {
        z-index:1 !important;
    }
`



const SwitchyPreview = ({preview}) => {
    return (
    <>  <Link to={`/switchy/${preview.id}`}>
            <SwitchyPreviewCard>
                <SwitchyPreviewTop>
                    <SwitchyPreviewTitle>{ preview.title }</SwitchyPreviewTitle>
                    <SwitchyPreviewCaption className={"explain"}>{ preview.caption }</SwitchyPreviewCaption>
                    <SwitchyPreviewCaption className={"madeby"}>made by { preview.publisher }</SwitchyPreviewCaption>
                    <SwitchyPreviewImage className={"upper index-2"} src={upper_wave}></SwitchyPreviewImage>
                    <SwitchyPreviewImage className={"down index-1"} src={down_wave}></SwitchyPreviewImage>
                </SwitchyPreviewTop>
                <SwitchyPreviewImage className={"main"} src={preview.image}></SwitchyPreviewImage>
            </SwitchyPreviewCard>
        </Link>
    </>

    )
}

export default SwitchyPreview;
