import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component'

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop/shop.component';
import Authentication from './pages/authentication/authentication.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribeFromAuth = null;
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={Authentication}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
