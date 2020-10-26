import React, { useState, useEffect } from 'react';

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
import Potatoe from '../images/potatoes.svg';
import VeganBurger from '../images/veganburger.svg';
import Salad from '../images/salad.svg';


import {
  Link, useParams
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

const switchyDataItems = [
    {
        preview_card_id: 1,
        id: 1,
        text: "Shoulder Press Up",
        image: ShoulderPressUp
    },
    {
        preview_card_id: 1,
        id: 2,
        text: "Inverted Row",
        image: InvertedRow
    },
    {
        preview_card_id: 1,
        id: 3,
        text: "Sit Up",
        image: SitUp
    },
    {
        preview_card_id: 2,
        id: 4,
        text: "Potatoes",
        image: Potatoe
    },
    {
        preview_card_id: 2,
        id: 5,
        text: "Vegan Burger",
        image: VeganBurger
    },
    {
        preview_card_id: 2,
        id: 6,
        text: "Salad",
        image: Salad
    },
    {
        preview_card_id: 3,
        id: 7,
        text: "Sit Up",
        image: SitUp
    },
    {
        preview_card_id: 3,
        id: 8,
        text: "Sit Up",
        image: SitUp
    },
    {
        preview_card_id: 3,
        id: 9,
        text: "Sit Up",
        image: SitUp
    },
]
    

const Switchy = () => {
    const [switchyItems, setSwitchyItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const newSwitchy = switchyDataItems.filter((data) => data.preview_card_id ===
        parseInt(id));
        setSwitchyItems(newSwitchy);
    }, []);

    return (
        <Header>
            <Navigation>
                <Wrapper className={"item-center"}>
                    <Link to="/"><AppIcon src={AppImg}></AppIcon></Link>
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
            <PrimaryHeader><Highlight>Enjoy your</Highlight> Switchy</PrimaryHeader>
            <SubHeader> Joy in life is endless you just have to create it</SubHeader>
            <SwitchCarousel switchyItems={switchyItems} />
            <Wrapper className={"center mb-6 content-center"}>
                <Link to="/switches"><Button className={"rounded functional bluebg reset"}>Back to Switches 🡲</Button></Link>
                <Button className={"rounded lightblue functional reset"}>Like <Emoji role="img" aria-label="Click">👍</Emoji></Button>
            </Wrapper>
        </Header>
    )
}

export default Switchy;