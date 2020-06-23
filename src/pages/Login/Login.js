import React from 'react';
import {NavLink} from 'react-router-dom';

import './Login.scss';
const Login = () => {
    return (
        <div className="register-login-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="login-form">
                        <h2>Login</h2>
                        <form action="#">
                            <div className="group-input">
                                <label for="username">Tên người dùng hoặc địa chỉ email *</label>
                                <input type="text" id="username" />
                            </div>
                            <div className="group-input">
                                <label for="pass">Mật khẩu *</label>
                                <input type="text" id="pass"/>
                            </div>
                            <div className="group-input gi-check">
                                <div className="gi-more">
                                    <label for="save-pass">
                                        Lưa mật khẩu
                                        <input type="checkbox" id="save-pass"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <a href="#" className="forget-pass">Quên mật khẩu</a>
                                </div>
                            </div>
                            <button type="submit" className="site-btn login-btn">Đăng nhập</button>
                        </form>
                        <div className="switch-login">
                            <NavLink className="nav-link or-login" to={"/register"}>Tạo tài khoản mới</NavLink>                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Login;
