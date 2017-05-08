import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './subComponents/Nav';
import Home from './Home';

class Main extends React.Component {


    render() {
       
        return (
            <div>
                <Nav></Nav>
                <Route path='/' component={Home}></Route>
            </div>
        )
    }
};

export default Main;


