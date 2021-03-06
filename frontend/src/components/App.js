import React, { Component } from 'react';
import NavigationBar from './NavigationBar'
import Footer from './Footer';
import UserProfilePage from "./UserProfilePage";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Restaurant from "./restaurant_page/Restaurant"

import Home from "./Home";

import './App.css';
 import LoginForm from "./LoginForm";
 import Registration from "./RegistrationPage";
 import RegistrationCopy from "./RegistrationCopyPage";


class App extends Component {
    render() {
        return (
            <div>

                <BrowserRouter>
                    <NavigationBar />
                        <Switch>
                            <Route exact={ true } path="/login" component={LoginForm} />
                            <Route exact={ true } path="/" component={Home} />
                            <Route exact={ true } path="/register" component={Registration} />
                            <Route exact={ true } path="/restaurant" component={Restaurant} />
                            <Route exact={ true } path="/userprofile" component={UserProfilePage} />
                        </Switch>
                    <Footer/>
                </BrowserRouter>

            </div>
        );
    }
}
export default App;
