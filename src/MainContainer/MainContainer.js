import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactContainer from '../ContactContainer/ContactContainer';
import HomeContainer from '../HomeContainer/HomeContainer';
import NavBar from '../NavBar/NavBar';
import ServicesContainer from '../ServicesContainer/ServicesContainer';

function MainContainer() {
    return (
        <Router>
            <NavBar/>

            <Switch>
                <Route path="/services">
                    <ServicesContainer />
                </Route>
                <Route path="/contact">
                    <ContactContainer />
                </Route>
                <Route path="/">
                    <HomeContainer />
                </Route>
            </Switch>
        </Router>
    );
}

export default MainContainer;