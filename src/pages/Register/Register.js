import React from "react";
import { Formik } from "formik";
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.actions';
import { alertActions } from '../../actions/alert.actions';
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }
    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;

        const { alert } = this.props;
        return (
            <div style={{paddingTop:'2rem'}}>
                <div className="text-center">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }  
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                        </div>
                        <div className="col-lg-6 col-lg-offset-3">
                            <h2>Đăng ký</h2>
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                                    <label htmlFor="firstName">Họ</label>
                                    <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                                    {submitted && !user.firstName &&
                                        <div className="help-block text-danger">Yêu cầu nhập họ</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                                    <label htmlFor="lastName">Tên</label>
                                    <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                                    {submitted && !user.lastName &&
                                        <div className="help-block text-danger">Yêu cầu nhập họ</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                                    <label htmlFor="username">Tên người dùng hoặc Email</label>
                                    <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                                    {submitted && !user.username &&
                                        <div className="help-block text-danger">Yêu cầu nhập tên người dùng hoặc Email</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                    <label htmlFor="password">Mật khẩu</label>
                                    <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                                    {submitted && !user.password &&
                                        <div className="help-block text-danger">Yêu cầu nhập mật khẩu</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Đăng ký</button>
                                    {registering &&
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                    <Link to="/login" className="btn btn-link">Hủy bỏ</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { registering } = state.registration;
    const { alert } = state;
    return { registering, alert };
}

const actionCreators = {
    register: userActions.register,
    clearAlerts: alertActions.clear
}

export default connect(mapStateToProps, actionCreators)(Register);
