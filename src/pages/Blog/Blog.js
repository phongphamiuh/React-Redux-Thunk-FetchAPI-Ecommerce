
import React, {Component} from 'react';
import './Blog.scss';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { blogs } from '../../data/blogs';
import {categorys} from '../../data/brands'
class Blog extends Component {
    
    render (){
    return(
        <section className="blog-section spad">
        <div className="container">
            <div className="row">
            
                <div className="col-lg-3 col-md-5 col-sm-5  order-1 order-lg-1">
                    <div className="blog-sidebar">

                        <div className="search-form">
                            <h4>Tìm kiếm</h4>
                            <form action="#">
                                <input type="text" placeholder="Tìm kiếm . . .  "/>
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>

                        <div className="blog-catagory">
                            <h4>Danh mục</h4>
                            <ul>
                                {categorys.map(category=>{
                                        return( 
                                            <li><a>{category}</a></li>
                                        )
                                    })}                                  
                            </ul>
                        </div>

                        <div className="recent-post">
                            <h4>Bài viết gần đây</h4>
                            <div className="recent-blog">
                                <a href="#" className="rb-item">
                                    <div className="rb-pic">
                                        <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2020/06/1592379114web-dev-job.png" alt=""/>
                                    </div>
                                    <div className="rb-text">
                                        <h6>Các khái niệm java...</h6>
                                        <p>Java<span>PhongPham</span> <span>- 13/6, 2019</span></p>
                                    </div>
                                </a>
                                <a href="#" className="rb-item">
                                    <div className="rb-pic">
                                        <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2020/06/1592446286remote-work-covid-19.png" alt=""/>
                                    </div>
                                    <div className="rb-text">
                                        <h6>Các khái niệm java...</h6>
                                        <p>Java<span>PhongPham</span> <span>- 13/6, 2019</span></p>
                                    </div>
                                </a>
                                <a href="#" className="rb-item">
                                    <div className="rb-pic">
                                        <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2020/06/1592788023ultimate-home-office.png" alt=""/>
                                    </div>
                                    <div className="rb-text">
                                        <h6>Các khái niệm java...</h6>
                                        <p>Java<span>PhongPham</span> <span>- 13/6, 2019</span></p>
                                    </div>
                                </a>
                               
                            </div>
                        </div>

                        <div className="blog-tags">
                            <h4>Các bài viết liên quan</h4>
                            <div className="tag-item">
                                {categorys.map(category=>{
                                    return( 
                                        <a>{category}</a>
                                    )
                                })}                                                     
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-lg-9 col-md-7 col-sm-7 order-2 order-lg-2">
                    <div className="row">
                        <article>
                            <div className="col-lg-12 col-sm-12">
                                <div className="blog-item">
                                    <NavLink className="nav-link " to="/">                                   
                                              {this.props.blogs.map(blog=>{
                                                  return(
                                                   <div>
                                                         <div className="row">
                                                            <div className="col-lg-4 bi-pic">
                                                                <img src={blog.images} />
                                                            </div>
                                                            <div className="col-lg-8 bi-text">
                                                                <h3>
                                                                    {blog.title}
                                                                </h3>
                                                                <div>{blog.category}<span>{blog.Author}</span><span>{blog.date}</span></div>
                                                                <p>{blog.description}</p>
                                                            </div>     
                                                         </div> 
                                                   </div>
                                                  )
                                              })}                                                                                                                                                           
                                    </NavLink>
                                </div>
                            </div>
                        </article>                                                                          
                        
                    </div>
                </div>

            </div>
        </div>
    </section>
    )   
}
}
const mapStateToProps=state=>{
    return {blogs:state.blog.blog}
}

export default connect(mapStateToProps, null)(Blog);