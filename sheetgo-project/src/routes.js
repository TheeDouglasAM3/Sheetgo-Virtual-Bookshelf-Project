import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home'
import Category from './pages/Category'
import BookDescription from './pages/BookDescription'
import BookManagement from './pages/BookManagement'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/category" component={Category} />
                
                <Route path="/book" component={BookDescription} />
                <Route path="/book/management" component={BookManagement} />
            </Switch>
        </BrowserRouter>
    );
}