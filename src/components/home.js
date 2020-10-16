import React from 'react';

/*Styles*/
import Header from './styles/header';
import Navigation from './styles/navigation';
import AppIcon from './styles/appicon';
import AppImg from '../images/sliding.svg';
import Wrapper from './styles/wrapper';
import HeadingSecondary from './styles/headingsecondary';
import NavAnchor from './styles/navanchor';
import Button from './styles/button';
import PrimaryHeader from './styles/primaryheader';
import SubHeader from './styles/subheader';
import Highlight from './styles/highlight';
import Emoji from './styles/emoji';

/*Components*/
import SwitchCarousel from './switchcarousel';
import InfoCard from './infocard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const info_cards = [
    {
        color: 'green',
        title:'Custom Cards',
        info:'Customize the look and feel of your Cards including switch times',
        btn: 'more reset mtb-1 green'
    },
    {
        color:'blue',
        title:'Publish your Work',
        info:'Making your Switchy public or private you decide!',
        btn: 'more reset mtb-1 blue'
    },
    {
        color: 'orange',
        title:'Your life story',
        info: 'Switchy is for everybody share your story here and now!',
        btn: 'more reset mtb-1 orange'
    }
]

const Home = () => {
    return (
        <Header>
            <Navigation>
                <Wrapper className={"item-center"}>
                    <AppIcon src={AppImg}></AppIcon>
                    <HeadingSecondary>Switchy</HeadingSecondary>
                </Wrapper>
                <Wrapper>
                    <NavAnchor>Overview</NavAnchor>
                    <NavAnchor>Try it</NavAnchor>
                    <NavAnchor>Showcase</NavAnchor>
                    <NavAnchor>About</NavAnchor>
                </Wrapper>
                <Link to="/register"><Button className={"square functional bluebg reset"}>Register</Button></Link>
            </Navigation>
            <PrimaryHeader><Highlight>Switchy</Highlight> Card Show App <br></br> to show off the beauty in Life</PrimaryHeader>
            <SubHeader>Your workout routine, holidays, full day of eating or whatever brings the <br></br> joy in your life with a custom and timeable carousel</SubHeader>
            <SwitchCarousel />
            <Wrapper className={"center mb-6 content-center"}>
                <Button className={"rounded functional bluebg reset"}>Try it out 🡲</Button>
                <Button className={"rounded rounded_light functional reset"}>More Switches <Emoji role="img" aria-label="Click">☝</Emoji></Button>
            </Wrapper>
            <Wrapper className={"center"}>
                {info_cards.map((info) => (
                    <InfoCard info={info} />
                ))}
            </Wrapper>
        </Header>
    )
}

export default Home;