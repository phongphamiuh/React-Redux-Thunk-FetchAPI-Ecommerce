import React, { Component } from 'react';
import {Provider, connect} from 'react-redux';
import {createStore } from 'redux';
import rootReducer from './reducers';

import {BrowserRouter, Switch, Route, Redirect,Router} from 'react-router-dom';

import './App.scss';
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

import { history } from './_helpers/history';
import Blog from "./pages/Blog/Blog";
import Register from "./pages/Register/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";
import OrderAdress from "./pages/OrderAdress/OrderAdress";
import Login from "./pages/Login/Login";
import HomePage from "./pages/LoginAnHome/HomePage";

import {alertActions} from './actions/alert.actions'
import {PrivateRoute} from './components/PrivateRT/PrivateRoute';
import Contact from './pages/Contact/Contact';



class App extends Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }  
  render() {
      const {alert}=this.props;
    return (
       
        <div>                        
            <Router history={history}>
            <React.Fragment>
                <Header/>            
                <Switch>
                    <Route exact path={'/'} render={() => {
                        return <Redirect to={'/products'}/>
                    }}/>
                    <Route exact path={'/order'} render={() => {
                        return <Redirect to={'/orderadress'}/>
                    }}/>
                    <Route exact path={'/contact'} component={Contact} />
                    <PrivateRoute exact path="/homepage" component={HomePage} />  

                    <Route exact path={'/products'} component={Home}/>      
                    <Route exact path={'/orderadress'} component={OrderAdress}/>              
                    <Route exact path={'/shop'} component={Shop}/>   
                                                 
                    <Route exact path={'/Blog'} component={Blog}/>
                    <Route exact path={'/register'} component={Register}/>
                    <Route exact path={'/login'} component={Login}/> 
                    <Route exact path={'/products/:id'} component={ProductDetail}/> 
                                    
                    <Route exact patr={'/cart'} component={ShoppingCart} /> 
                     

                </Switch>                         
                <Footer/>
            </React.Fragment>
            </Router>
       
        </div>
    );
  }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}


const actionCreators = {
    clearAlerts: alertActions.clear
};

export default connect(mapState,actionCreators)(App);
