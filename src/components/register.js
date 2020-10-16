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

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Register = () => {
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
                <Link to="/login"><Button className={"square functional bluebg reset"}>Login</Button></Link>
            </Navigation>
            <PrimaryHeader><Highlight>Register</Highlight> for free and have <br></br> acces to  your personal Switchy</PrimaryHeader>
            <SubHeader className={"mb-3"}>After registering you can create or browse through alot of Switchy´s <br></br> they will bring joy in your life</SubHeader>
            <FormContainer>
                <FormHeader>Register</FormHeader>
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
                    <Divider></Divider>
                </Form>
            </FormContainer>
        </Header>
    )
}

export default Register;