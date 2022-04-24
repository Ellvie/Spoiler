import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import { News } from './components/News';
import { Guide } from './components/Guide';
import { Forum } from './components/Forum';
import { Recaps } from './components/Recaps';
import { Reviews } from './components/Reviews';
import { Search } from './components/Search';

import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />

            <Route path='/news' component={News} />
            <Route path='/guide' component={Guide} />
            <Route path='/forum' component={Forum} />
            <Route path='/recaps' component={Recaps} />
            <Route path='/reviews' component={Reviews} />
            <Route path='/search' component={Search} />



        <AuthorizeRoute path='/fetch-data' component={FetchData} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
