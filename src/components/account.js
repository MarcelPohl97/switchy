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
import FormContainer from './styles/formcontainer';
import FormHeader from './styles/formheader';
import Form from './styles/form';
import Input from './styles/input';
import Label from './styles/label';
import Divider from './styles/divider';

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


const Account = () => {
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
            <PrimaryHeader><Highlight>Change</Highlight> your Account Settings to get <br></br> acces to your personal Switchy</PrimaryHeader>
            <SubHeader className={"mb-3"}>After changing your Account Settings you can create or browse through alot of Switchy´s <br></br> they will bring joy in your life</SubHeader>
            <FormContainer>
                <FormHeader>Account Settings</FormHeader>
                <Form>
                    <Wrapper className={"direction-column content-center w-100 not-last"}>
                        <Label>E-Mail</Label>
                        <Input></Input>
                    </Wrapper>
                    <Wrapper className={"direction-column content-center w-100 not-last"}>
                        <Label>Username</Label>
                        <Input></Input>
                    </Wrapper>
                    <Wrapper className={"direction-column content-center w-100 not-last"}>
                        <Label>Password</Label>
                        <Input></Input>
                    </Wrapper>
                </Form>
                <Divider></Divider>
                <Wrapper className={"content-center mtb-3"}>
                    <Button className={"functional reset square bluebg"}>Save Changes 🔒</Button>
                </Wrapper>
            </FormContainer>
        </Header>
    )
}

export default Account;