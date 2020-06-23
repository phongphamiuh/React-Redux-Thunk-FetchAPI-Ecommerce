import React from 'react';
import '../Login/Login.scss';
const Register = () => {
    return (
        <div className="register-login-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="register-form">
                        <h2>Đăng ký</h2>
                        <form action="#">
                            <div className="group-input">
                                <label for="username">Tên người dùng hoặc địa chỉ email *</label>
                                <input type="text" id="username"/>
                            </div>
                            <div className="group-input">
                                <label for="pass">Mật khẩu *</label>
                                <input type="text" id="pass"/>
                            </div>
                            <div className="group-input">
                                <label for="con-pass">Xác nhận mật khẩu *</label>
                                <input type="text" id="con-pass"/>
                            </div>
                            <button type="submit" className="site-btn register-btn">Đăng ký</button>
                        </form>
                        <div className="switch-login">
                            <a href="./login.html" className="or-login">Đăng nhập</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Register;
