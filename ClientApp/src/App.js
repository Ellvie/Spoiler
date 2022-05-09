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
import { ShowForum } from './components/ShowForum';
import { FilmForum } from './components/FilmForum';
import { ShowReview } from './components/ShowReview';
import { FilmReview } from './components/FilmReview';
import { ShowRecap } from './components/ShowRecap';
import { FilmRecap } from './components/FilmRecap';

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
            <AuthorizeRoute path='/showForum' component={ShowForum} />
            <AuthorizeRoute path='/filmForum' component={FilmForum} />
            <AuthorizeRoute path='/showReview' component={ShowReview} />
            <AuthorizeRoute path='/filmReview' component={FilmReview} />
            <AuthorizeRoute path='/showRecap' component={ShowRecap} />
            <AuthorizeRoute path='/filmRecap' component={FilmRecap} />



        
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}

//Insert under <Route>
//<AuthorizeRoute path='/fetch-data' component={FetchData} /> 