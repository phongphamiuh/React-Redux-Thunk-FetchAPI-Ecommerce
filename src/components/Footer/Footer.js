import React from 'react';
import './Footer.scss';
import {NavLink} from 'react-router-dom'

const Footer = () => {
    return (
        <footer class="footer-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="footer-left">                   
                        <h5>Địa chỉ</h5>
                        <ul>
                            <li>Địa chỉ: 126/12/1 Đường 30/4 Thị Trấn Ngãi Giao</li>
                            <li>Phone: 0358984752</li>
                            <li>Email: phongpham.iuh@gmail.com</li>
                        </ul>
                        <div class="footer-social">
                            <a href="https://www.linkedin.com/in/phong-ph%E1%BA%A1m-65433b192/"><i class="fa fa-linkedin"></i></a>
                            <a href="https://github.com/phongphamiuh"><i class="fa fa-github"></i></a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 offset-lg-1">
                    <div class="footer-widget">
                        <h5>Thông tin</h5>
                        <ul>
                            <li><a href="#">Chăm sóc khách hàng</a></li>           
                            <li><a href="#">Liên hệ</a></li>
                            <li><a href="#">Trợ giúp</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="footer-widget">
                        <h5>Tài khoản của tôi</h5>
                        <ul>
                            <li><NavLink  to="/login">Tài Khoản</NavLink></li>
                            <li><NavLink  to="/orderadress">Thanh Toán</NavLink></li>
                            <li><NavLink  to="/cart">Giỏ Hàng</NavLink></li>
                            <li><NavLink  to="/shop">Sách Ưa Thích</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="newslatter-item">
                        <h5>Đăng ký nhận bản tin của chúng tôi</h5>
                        <p>Đừng bỏ lỡ những bản tin hấp dẫn</p>
                        <form action="#" class="subscribe-form">
                            <input type="text" placeholder="Địa chỉ email của bạn" />
                            <button type="button">Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;