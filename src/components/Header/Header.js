import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './Header.scss';
import '../BrandFilter/BrandFilter.scss';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {formatMoney} from "../../pipes/priceFormatter";
import CartItem from '../CartItem/CartItem';
import {userActions} from '../../actions/user.actions'

class Header extends React.Component {
    componentDidMount() {
        this.props.getUsers();  
    }
    getlegth(){
     return  this.props.cartLength;
    }
    getTotal(){
        return this.props.totalPrice;
    }
    getUserLocalStorage(){
        return JSON.parse(localStorage.getItem('user'));
    }
    render(){
        const {user,users}=this.props;
        const cartLength=this.getlegth();
        const totalPrice=this.getTotal();
        const userLocalStorage=this.getUserLocalStorage();
        
        return (        
            <div>   
                <div className="header-top">
                    <div className="container">
                    
                        <div className="ht-left">
                            <div className="logo-push">
                                <div className="logo">
                                 <NavLink className="navbar-brand" to="/">Ecommerce</NavLink>
                                </div>
                            </div>
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
                                {
                                    userLocalStorage  ? <NavLink className="nav-link login-panel" to={"/homepage"}><i className="fa fa-user"/>Xin chào {user.firstName} {user.lastName}</NavLink>: 
                                    <NavLink className="nav-link login-panel" to={"/homepage"}><i className="fa fa-user"/>Tài khoản</NavLink> 
                                }
                             
                            <div className="top-social">
                                <a href="https://www.linkedin.com/in/phong-ph%E1%BA%A1m-65433b192/"><i class="fa fa-linkedin"></i></a>
                                <a href="https://github.com/phongphamiuh"><i class="fa fa-github"></i></a>
                                <a href="https://dev.to/phongphamiuh"><i class="fa fa-dev"></i></a>
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
                            <div className="col-lg-7 col-md-7 col-sm-10">
                                <div className="advanced-search">
                                    <form action="#" className="input-group">
                                        <input type="text" placeholder="Tìm sản phẩm bạn muốn?"/>
                                        <button type="button"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 text-right col-md-3 col-sm-2">
                                <ul className="nav-right">                  
                                    <li className="heart-icon">
                                        <a href="#">
                                            <i className="fa fa-heart"></i>
                                            <span>1</span>
                                        </a>
                                    </li>
                                    <li className="cart-icon">                                                
                                        <li>
                                            <NavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2"
                                            aria-hidden="true" /><span class>Giỏ hàng</span> {cartLength ? `(${cartLength})`: ''}</NavLink>
                                        </li>                                               
                                        <div className="cart-hover">
                                            
                                            <div className="card-footer">
                                                
                                                    <div>
                                                       Thành tiền: ${totalPrice}
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
        
                
        
                    <div className="navbar-navigation">
                        <div className="container-fluid">
                            <Navbar  expand="lg" className="nav-item">
                                <Navbar.Brand href="#home">                         
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto  mobile-menu">
                                    <li><NavLink to={"/"}>Trang chủ</NavLink></li>
                                    <li><NavLink to={"/shop"}>Tất cả sản phẩm</NavLink></li>
                                    <li><NavLink to={"/orderadress"}>Thanh toán</NavLink></li>
                                    <li><NavLink to={"/blog"}>Blog</NavLink></li>
                                    <li><NavLink to={"/contact"}>Liên hệ</NavLink></li>              
                                    </Nav>         
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
        
             </div>           
            );
    }
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
    getUser:userActions.getID,
    deleteUser: userActions.delete
}

export default connect(mapStateToProps, actionCreators)(Header);
