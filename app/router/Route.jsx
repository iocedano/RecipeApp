import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route as RouterDOMRoute,
  Link
} from 'react-router-dom';


// //**
//  * Composiable Route that\'s Wrap the Router
//  * 
//  * @param {Object} route Router props
//  * @param {Object} route.path URI 
//  * @param {Object} route.component component
//  * @param {Object} route.routes SubRouters
//  * @public
//  * @return {ReactElement} 
//  */
const Route = (route) => (
  <RouterDOMRoute path={route.path} render={props => (
    <route.component {...props} />
  )}/>
);

Route.propTypes = {
  component: PropTypes.ReactElement,
  path: PropTypes.string,
  routes: PropTypes.shape([{
    component: PropTypes.ReactElement,
    path: PropTypes.string,
  }])
};

export default Route;
