import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './Header.scss';
import '../BrandFilter/BrandFilter.scss';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {formatMoney} from "../../pipes/priceFormatter";
import CartItem from '../CartItem/CartItem';
import {userActions} from '../../actions/user.actions'

const Header = ({cartLength},props) => {
    
    return (        
    <div>   
        <div className="header-top">
            <div className="container">
                <div className="ht-left">
                    <div className="mail-service">
                        <i className=" fa fa-envelope"></i>
                        phongpham.iuh@gmail.com
                    </div>
                    <div className="phone-service">
                        <i className=" fa fa-phone"></i>
                        0358983752
                    </div>
                </div>
                <div className="ht-right">  
                <div>
                
                </div>                 
                    <NavLink className="nav-link login-panel" to={"/login"}><i className="fa fa-user"/>Đăng nhập</NavLink>           
                    <NavLink className="nav-link login-panel" to={"/register"}><i className="fa fa-user"/>Đăng Ký</NavLink> 
                    <div className="top-social">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div className="container">
            <div className="inner-header">
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                        <div className="logo">
                         <NavLink className="navbar-brand" to="/">Ecommerce</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7 ">
                        <div className="advanced-search">
                            <form action="#" className="input-group">
                                <input type="text" placeholder="Tìm sản phẩm bạn muốn?"/>
                                <button type="button"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 text-right col-md-3">
                        <ul className="nav-right">                  
                            <li className="heart-icon"><a href="#">
                                    <i className="fa fa-heart"></i>
                                    <span>1</span>
                                </a>
                            </li>
                            <li className="cart-icon">                                                
                            <li>
                                <NavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2"
                                 aria-hidden="true" />Cart {cartLength ? `(${cartLength})`: ''}</NavLink>
                            </li>                                               
                                <div className="cart-hover">
                                    
                                    <div className="card-footer">
                                        
                                            <div>
                                                 <b>{props.totalPrice}€</b>
                                            </div>
                                                         
                                    </div>
                                    <div className="select-button">                               
                                        <NavLink  className="primary-btn view-card nav-link" to="/cart">Xem giỏ hàng</NavLink>          
                                    </div>
                                </div>
                            </li>                         
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="product-details quick-view modal animated zoomInUp" id="quick-view">
            <div className="container">
                <div className="row">
                    <a className="UserModalstyle__CloseButton-tngk37-10 fIfNjl">
                        <span className="tikicon icon-circle-close"></span></a>

                </div>
            </div>
        </div>             
            <div className="container-fluid">
                <Navbar bg="light" expand="lg" className="nav-item">
                    <Navbar.Brand href="#home">                         
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto nav-menu mobile-menu">
                        <li><NavLink className="nav-link" to={"/"}>Trang chủ</NavLink></li>
                        <li><NavLink className="nav-link" to={"/shop"}>Tất cả sản phẩm</NavLink></li>
                        <li><NavLink className="nav-link" to={"/orderadress"}>Thanh toán</NavLink></li>
                        <li><NavLink className="nav-link" to={"/blog"}>Blog</NavLink></li>
                        <li><Nav.Link href="#link">Liên hệ</Nav.Link></li>              
                        </Nav>         
                    </Navbar.Collapse>
                </Navbar>
            </div>

     </div>           
    );
};

const mapStateToProps = (state) => {
    const {users,authentication}=state;
    const {user}=authentication;
  return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0),
        cartLength: state.shop.cart.length,
        user,
        users
  }
};
const actionCreators={
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

export default connect(mapStateToProps, actionCreators)(Header);
