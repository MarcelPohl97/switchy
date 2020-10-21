import React from 'react';

/*Images*/
import Workout from '../images/workout.svg';

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

const switchyCard = [
    {
      uid: 1,
      name: 'Marcellus Fullbody Workout',
      id:'dasasdtraeasd',
      publisher: "Marcellus Pale",
      date: "16.10.2020",
      publish: true,
      image: Workout,
    },
  ];    

const Switches = () => {
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
                <Link to="/register"><Button className={"square functional bluebg reset"}>Logout</Button></Link>
            </Navigation>
            <PrimaryHeader><Highlight>Switchy</Highlight> Explore all the Switchys <br></br> they will show you the beauty in Life</PrimaryHeader>
            <SubHeader>workout routine, holiday, full day of eating everything can be found here <br></br> they will bring joy in your life</SubHeader>
        </Header>
    )
}

export default Switches;