import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';

import { Home } from './components/Home';
import { News } from './components/News';
import { Guide } from './components/Guide';
import { Forum } from './components/Forum';
import { ForumSingle } from './components/ForumSingle';
import { Recaps } from './components/Recaps';
import { RecapSingle } from './components/RecapSingle';
import { Reviews } from './components/Reviews';
import { ReviewSingle } from './components/ReviewSingle';
import { Search } from './components/Search';
import { ShowEntry } from './components/ShowEntry';
import { FilmEntry } from './components/FilmEntry';

import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './style.scss'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/news' component={News} />
            <Route path='/guide' component={Guide} />
            <Route path='/forum' component={Forum} />
            <Route path='/forumSingle' component={ForumSingle} />
            <Route path='/recaps' component={Recaps} />
            <Route path='/recapSingle' component={RecapSingle} />
            <Route path='/reviews' component={Reviews} />
            <Route path='/reviewSingle' component={ReviewSingle} />
            <Route path='/search' component={Search} />
            <Route path='/showEntry' component={ShowEntry} />
            <Route path='/filmEntry' component={FilmEntry} />



        
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}

//Insert under <Route>
//<AuthorizeRoute path='/fetch-data' component={FetchData} /> 