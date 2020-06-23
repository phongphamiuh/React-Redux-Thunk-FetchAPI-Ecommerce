import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './Header.scss';
import '../BrandFilter/BrandFilter.scss';
import BrandFilter from '../BrandFilter/BrandFilter';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';

const Header = ({cartLength}) => {

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
                    <NavLink className="nav-link login-panel" to={"/register"}><i className="fa fa-user"/>Đăng Ký</NavLink> 
                    <NavLink className="nav-link login-panel" to={"/login"}><i className="fa fa-user"/>Đăng nhập</NavLink>           
                   
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
                    <div className="col-lg-6 col-md-7">
                        <div className="advanced-search">
                            <form action="#" className="input-group">
                                <input type="text" placeholder="Tìm sản phẩm bạn muốn?"/>
                                <button type="button"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 text-right col-md-3">
                        <ul className="nav-right">
                            <li><a href="#" data-toggle="modal" data-target="#quick-view" className="fa fa-user">Tài khoản</a></li>

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
                                    <div className="select-items">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="si-pic"><img src="img/select-product-1.jpg" alt="" /></td>
                                                    <td className="si-text">
                                                        <div className="product-selected">
                                                            <p>100000 VND</p>
                                                            <h6>Kabino Bedside Table</h6>
                                                        </div>
                                                    </td>
                                                    <td className="si-close">
                                                        <i className="ti-close"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="si-pic"><img src="img/select-product-2.jpg" alt="" /></td>
                                                    <td className="si-text">
                                                        <div className="product-selected">
                                                            <p>100000 VND</p>
                                                            <h6>Kabino Bedside Table</h6>
                                                        </div>
                                                    </td>
                                                    <td className="si-close">
                                                        <i className="ti-close"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="select-total">
                                        <span>total:</span>
                                        <h5>200000 VND</h5>
                                    </div>
                                    <div className="select-button">                               
                                        <a href="#" className="primary-btn view-card">Xem giỏ hàng</a>
                                        <a href="#" className="primary-btn checkout-btn">Kiểm tra</a>
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
                    <Navbar.Brand href="#home"> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto nav-menu mobile-menu">
                        <li><NavLink className="nav-link" to={"/"}>Trang chủ</NavLink></li>
                        <li><NavLink className="nav-link" to={"/shop"}>Tất cả sản phẩm</NavLink></li>
                        <li><Nav.Link href="#link">Thanh toán</Nav.Link></li>
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
  return {
      cartLength: state.shop.cart.length
  }
};

export default connect(mapStateToProps, null)(Header);


/*
*                         <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
* */