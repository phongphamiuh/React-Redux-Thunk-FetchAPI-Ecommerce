import React from 'react';
import {Card,Button} from 'react-bootstrap'
import img from '../../data/myimg.jpg'
import './Contact.scss';
const Contact = () => {
    return (
        <div className="container">
            <div class="card text-center">
            <div class="card-header">
                Thông tin
            </div>
            <div className="row">
            <div class="contact-img col-lg-4">
                <img src={img}></img>
            </div>
            <div className="contact-content col-lg-8">
                <h2 class="contact-name m-5">Phong Phạm</h2>
                <p><a href="#"><i class="fa fa-envelope-square"></i>phongpham.iuh@gmail.com</a></p>
                <p><a href="https://github.com/phongphamiuh"><i class="fa fa-github"/>Thông tin qua Github</a></p>
                <p><a href="https://www.linkedin.com/in/phong-ph%E1%BA%A1m-65433b192/"><i class="fa fa-linkedin"></i>Thông tin qua Linkedin</a></p>
                <a href="#" class=""><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFWghO60zyBEQ/company-logo_100_100/0?e=1602115200&v=beta&t=WVCVWiGarc3HfKEOe95FQp_hZL7_QuD6VzW-Ju8kSps"></img>
                <span>Industrial University of Ho Chi Minh City</span>
                </a>
            </div>
            </div>
            <div class="card-footer text-muted">
                Liện hệ với tôi
            </div>
        </div>
        </div>
    );
};
export default Contact;
