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

/*Components*/
import SwitchCarousel from './switchcarousel';



const Home = () => {
    return (
        <Header>
            <Navigation>
                <Wrapper>
                    <AppIcon src={AppImg}></AppIcon>
                    <HeadingSecondary>Switchy</HeadingSecondary>
                </Wrapper>
                <Wrapper>
                    <NavAnchor>Overview</NavAnchor>
                    <NavAnchor>Try it</NavAnchor>
                    <NavAnchor>Showcase</NavAnchor>
                    <NavAnchor>About</NavAnchor>
                </Wrapper>
                <Button>Register</Button>
            </Navigation>
            <PrimaryHeader><Highlight>Switchy</Highlight> Card Show App <br></br> to show off the beauty in Life</PrimaryHeader>
            <SubHeader>Your workout routine, holidays, full day of eating or whatever brings the <br></br> joy in your life with a timeable and animated carousel</SubHeader>
            <SwitchCarousel />
        </Header>
    )
}

export default Home;