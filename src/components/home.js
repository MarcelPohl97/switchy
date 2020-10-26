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

/*Images*/
import ShoulderPressUp from '../images/dumbbell.svg';
import InvertedRow from '../images/pull_up_bar.svg';
import SitUp from '../images/sit_up.svg';
import Squat from '../images/squat.svg';
import TricepDips from '../images/tricep.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/*Switchy Items*/

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

const switchypreviewItems = [
    {
      card_id: "dasasdtraeasd",
      id: 1,
      text: "Shoulder Press Up",
      image: ShoulderPressUp
    },
    {
      id: 2,
      text: "Inverted Row",
      image: InvertedRow
    },
    {
      id: 3,
      text: "Sit Up",
      image: SitUp
    },
    {
      id: 4,
      text: "Squat",
      image: Squat
    },
    {
      id: 5,
      text: "Tricep Dips",
      image: TricepDips
    }
  ];  

const Home = () => {
    return (
        <Header>
            <Navigation>
                <Wrapper className={"item-center"}>
                    <AppIcon src={AppImg}></AppIcon>
                    <HeadingSecondary>Switchy</HeadingSecondary>
                </Wrapper>
                <Wrapper className={"item-center"}>
                    <NavAnchor>Overview</NavAnchor>
                    <NavAnchor>Try it</NavAnchor>
                    <Link style={{ textDecoration: 'none' }} to="/switches"><NavAnchor>Showcase</NavAnchor></Link>
                    <NavAnchor>About</NavAnchor>
                </Wrapper>
                <Link to="/register"><Button className={"square functional bluebg reset"}>Register</Button></Link>
            </Navigation>
            <PrimaryHeader><Highlight>Switchy</Highlight> Card Show App <br></br> to show off the beauty in Life</PrimaryHeader>
            <SubHeader>Your workout routine, holidays, full day of eating or whatever brings the <br></br> joy in your life with a custom and timeable carousel</SubHeader>
            <SwitchCarousel switchyItems={switchypreviewItems} />
            <Wrapper className={"center mb-6 content-center"}>
                <Button className={"rounded functional bluebg reset"}>Try it out 🡲</Button>
                <Link to="/switches"><Button className={"rounded lightblue functional reset"}>More Switches <Emoji role="img" aria-label="Click">☝</Emoji></Button></Link>
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