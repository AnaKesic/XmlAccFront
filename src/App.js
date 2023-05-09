import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
//import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
//import Checkout from './containers/Checkout/Checkout';
//import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Flights from './containers/Flights/Flights';
import Login from './containers/Auth/Login/Login';
import Logout from './containers/Auth/Logout/Logout';
import Tickets from './containers/Tickets/Tickets'
import * as actions from './store/actions/index';
import Accomodation from './containers/Accomodation/Accomodation';
import FreeReservationsList from './containers/FreeReservations/free-reservations.component';
import GetAll from './containers/Accomodation/GetAll';

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render () {
    let routes = (
      <Switch>
        <Route path="/free-reservations" component={FreeReservationsList}/>
        <Route path="/auth" component={Auth} />
        <Route path="/login" component={Login} />
         <Route path="/flights" component= {Flights} /> 
         <Route path="/accomodation/create" component= {Accomodation} /> 
         <Route path="/accomodation/all" component= {GetAll} /> 
         <Route path="/"/>
        {/* <Route path="/flights" component={} */}
        {/* <Route path="/" exact component={BurgerBuilder} /> */}
         <Redirect to="/" /> 
      </Switch>
    );

   if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/accomodation/create" component={Accomodation}/>
          <Route path="/flights" component={Tickets}/>
          <Route path="/logout" exact component={Logout}/>
          <Route path="/" />
           <Redirect to="/" /> 
        </Switch>
      );
    } 

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
