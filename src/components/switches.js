import React from 'react';

/*Images*/
import Workout from '../images/workout.svg';

/*Styles*/
import Header from './styles/header';
import Navigation from './styles/navigation';
import AppIcon from './styles/appicon';
import AppImg from '../images/sliding.svg';
import Wrapper from './styles/wrapper';
import WrapperGrid from './styles/wrapper_grid';
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
import SwitchyPreview from './switchy_preview';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Switches = () => {
    return (
        <Header>
            <Navigation>
                <Wrapper className={"item-center"}>
                    <Link to="/"><AppIcon src={AppImg}></AppIcon></Link>
                    <HeadingSecondary>Switchy</HeadingSecondary>
                </Wrapper>
                <Wrapper className={"item-center"}>
                    <Link style={{ textDecoration: 'none' }} to="/dashboard"><NavAnchor>Dashboard</NavAnchor></Link>
                    <Link style={{ textDecoration: 'none' }} to="/account"><NavAnchor>Account</NavAnchor></Link>
                    <Link style={{ textDecoration: 'none' }} to="/subscription"><NavAnchor>Subscription</NavAnchor></Link>
                    <Link style={{ textDecoration: 'none' }} to="/createswitch"><NavAnchor>Create Switchy</NavAnchor></Link>
                </Wrapper>
                <Link to="/register"><Button className={"square functional bluebg reset"}>Logout</Button></Link>
            </Navigation>
            <PrimaryHeader><Highlight>Switches</Highlight> Explore all the Switchy´s <br></br> they will show you the beauty in Life</PrimaryHeader>
            <SubHeader>workout routine, holiday, full day of eating everything can be found here <br></br> they will bring joy in your life</SubHeader>
            <WrapperGrid>
                <Link to="/dashboard"><SwitchyPreview /></Link>
                <SwitchyPreview />
                <SwitchyPreview />
            </WrapperGrid>
        </Header>
    )
}

export default Switches;