import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer class="footer-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="footer-left">
                        <div class="footer-logo">
                            <a href="#"><img src="img/footer-logo.png" alt=""/>
                            </a>
                        </div>
                        <ul>
                            <li>Địa chỉ: 126/12/1 Đường 30/4 Thị Trấn Ngãi Giao</li>
                            <li>Phone: 0358984752</li>
                            <li>Email: phongpham.iuh@gmail.com</li>
                        </ul>
                        <div class="footer-social">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 offset-lg-1">
                    <div class="footer-widget">
                        <h5>Thông tin</h5>
                        <ul>
                            <li><a href="#">Chăm sóc khách hàng</a></li>
                            <li><a href="#">Thanh toán</a></li>
                            <li><a href="#">Liên hệ</a></li>
                            <li><a href="#">Trợ giúp</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="footer-widget">
                        <h5>Tài khoản của tôi</h5>
                        <ul>
                            <li><a href="#">Tài khoản của tôi</a></li>
                            <li><a href="#">Liên hệ</a></li>
                            <li><a href="#">Giỏ hàng</a></li>
                            <li><a href="#">Mua sắm</a></li>
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