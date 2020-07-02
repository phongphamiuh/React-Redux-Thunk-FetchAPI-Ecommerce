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
import RegisterPage from "./pages/Register/RegisterPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";
import OrderAdress from "./pages/OrderAdress/OrderAdress";
import LoginPage from "./pages/LoginAnHome/LoginPage";
import HomePage from "./pages/LoginAnHome/HomePage";

import {alertActions} from './actions/alert.actions'
import {PrivateRoute} from './components/PrivateRT/PrivateRoute';



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
            <div>
            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }  
            </div>           
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

                    <PrivateRoute exact path="/homepage" component={HomePage} />  

                    <Route exact path={'/products'} component={Home}/>      
                    <Route exact path={'/orderadress'} component={OrderAdress}/>              
                    <Route exact path={'/shop'} component={Shop}/>                                
                    <Route exact path={'/Blog'} component={Blog}/>
                    <Route exact path={'/register'} component={RegisterPage}/>
                    <Route exact path={'/login'} component={LoginPage}/> 
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
