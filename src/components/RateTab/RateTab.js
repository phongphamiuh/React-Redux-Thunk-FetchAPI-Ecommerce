import React from 'react';
import './RateTab.scss'
import {Tabs,Tab,Sonnet,TabContent} from 'react-bootstrap';
const RateTab = () => {
    return (
        <div className="tab">
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="row">
            <Tab eventKey="home" title="Sơ lược về sách" >
                <TabContent>
                Completely updated for Java SE eight, Java: The Complete Reference, Ninth Edition explains the best method to develop, compile, debug, and run Java packages. Bestselling programming author Herb Schildt covers the entire Java language, along with its syntax, key phrases, and elementary programming guidelines, along with very important elements of the Java API library. JavaBeans, servlets, applets, and Swing are examined and precise-world examples reveal Java in movement. New Java SE eight choices similar to lambda expressions, the stream library, and the default interface method are talked about intimately. This Oracle Press helpful useful resource moreover presents a robust introduction to JavaFX.
                </TabContent>
                dsad
            </Tab>
            <Tab eventKey="profile" title="Tại sao bạn phải đọc">
                <TabContent>dsadsd</TabContent>
            </Tab>
            <Tab eventKey="Nhận xét của các bạn" title="Nhận xét của các bạn" className="info-reviews review-text tab-pane fade in active">
            <div  className="tab">
                <div className="about-author">                                    
                        <div className="author-des">
                            <h4><a href="#">Gregory Hernandez</a></h4>
                            <span className="floatright ratting">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half"></i>
                            </span>
                            <span>27 Jun, 2016 at 2:30pm</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas eleifend. Phasellus a felis at est bibenes dum feugiat ut eget eni Praesent et messages in consectetur.</p>                      
                    </div>
                </div>
                <hr />
                <div className="about-author">                               
                        <div className="author-des">
                            <h4><a href="#">Gregory Hernandez</a></h4>
                            <span className="floatright ratting">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half"></i>                                       
                            </span>
                            <span>27 Jun, 2016 at 2:30pm</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas eleifend. Phasellus a felis at est bibenes dum feugiat ut eget eni Praesent et messages in consectetur.</p>
                        </div>                 
                </div>
                <div className="your-rating log-title">
                            <h3>leave your review</h3>
                            <h5>Your rating</h5>
                            <div className="rating clearfix">
                                <ul>
                                    <li>
                                        <a href="#">
                                             <i className="fa fa-star"></i>
                                        </a>
                                        <span>|</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </a>
                                        <span>|</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </a>
                                        <span>|</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </a>
                                        <span>|</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half"></i> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                <div class="form-style-6">                 
                            <form>
                                <input type="text" name="field1" placeholder="Your Name" />
                                <input type="email" name="field2" placeholder="Email Address" />
                                <textarea name="field3" placeholder="Type your Message"></textarea>
                                <input type="submit" value="Send" />
                            </form>
                        </div>          
            </div>                       
            </Tab>                    
        </Tabs>
    </div>
    );
};

export default RateTab;