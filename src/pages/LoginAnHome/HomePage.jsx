import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.actions';
import './HomePage.scss';
class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUser();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="homepage"> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 ">
                        <h1>Xin chào {user.firstName} {user.lastName}!</h1>
                        {/* <h3>All registered users:</h3> */}
                        {/* {users.loading && <em>Loading users...</em>}
                        {users.error && <span className="text-danger">ERROR: {users.error}</span>} */}

                        {/* {users.items &&
                            <ul>
                                {users.items.map((user, index) =>
                                    <li key={user.id}>
                                        {user.firstName + ' ' + user.lastName}
                                        {
                                            user.deleting ? <em> - Deleting...</em>
                                            : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                            : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                        }
                                    </li>
                                )}
                            </ul>
                        } */}
                        
                        </div>
                        <div className="col-md-0 col-sm-0">        
                            <span>      
                            <Link className="btn btn-info" to="/"><i className="fa fa-cog"></i>Chi tiết tài khoản</Link>
                            </span>  
                            <span>
                            <Link className="btn btn-primary" to="/shop"><i className="fa fa-plus"></i>Đặt sách</Link>   
                            </span>  
                            <span>
                            <Link className="btn btn-danger" to="/wishlist"><i className="fa fa-heart"></i>Danh sách yêu thích</Link>   
                            </span>
                            <span>
                            <Link className="btn btn-primary" to="/login">Logout</Link>   
                            </span>                  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete,
    getUser:userActions.getID
}

export default HomePage = connect(mapState, actionCreators)(HomePage);
