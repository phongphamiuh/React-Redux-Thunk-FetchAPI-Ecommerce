import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import CartItem from "../../components/CartItem/CartItem";
import { NavLink } from 'react-router-dom';
import './ShoppingCart.scss';

const ShoppingCart = (props) => {
    return (
        <>
                <div className="container" style={{paddingTop: '2rem'}}>
                    <div className="card shopping-cart">
                        <div className="card-header bg-dark text-light">
                            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                            Giỏ hàng
                            <div className="clearfix"></div>
                        </div>
                        
                        <div className="card-body">
                            {props.cartItemCount ? props.cartItems.map(cart => (
                                <CartItem {...cart} img={cart.images[0]} />
                            )) : <div className="continue row">
                            <div className="col-xs-12 col-sm-12 col-md-9 offset-md-1 col-lg-8 offset-lg-2 right-side">
                            <h1 className="text-center">Không có sản phẩm trong giỏ</h1> 
                            <button className="btn btn-warning "><NavLink className="nav-link" to="/shop">Tiếp tục đặt sách</NavLink></button>
                            </div>
                            </div>
                            }
                        </div>
                        <div className="card-footer">
                            <div className="pull-right" style={{margin: '10px'}}>
                                <div className="pull-right" style={{margin: '5px'}}>
                                    Thành tiền: <b>{formatMoney(props.totalPrice)}€</b>
                                </div>
                            </div>                   
                        </div>

                        <div className="couple">
                            <div className="row">
                                <div className="col-xs-12 col-sm-5 offset-sm-7 col-md-4 offset-md-8 right-side">
                                    <form  name="discount-form" id="discount-form">
                                        <div className="input-group">                                         
                                            <input className="form-control" type="text" id="code" name="code" placeholder="Mã giảm giá"/>
                                            <span className="input-group-btn">
                                                <button className="btn btn-default" type="submit" id="applyDiscountButton" >Đồng ý</button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>       
                        </div>
                        <div className="checkout">  
                            <div className="row">
                                    <div className="col-xs-12 col-sm-5 offset-sm-7 col-md-4 offset-md-8 right-side">
                                        <button className="btn btn-primary w-100">
                                        <NavLink className="nav-link " to={"/login"}>Đặt Hàng</NavLink>
                                        </button>
                                    </div>
                            </div>     
                        </div>   
                    </div>
                </div>
            </>
    );
};


const mapStateToProps = state => {
    console.log(state, 'state has changed');
    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
}

export default connect(mapStateToProps, null)(ShoppingCart);
