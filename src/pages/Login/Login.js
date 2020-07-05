import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.actions';
import { alertActions } from '../../actions/alert.actions';
import './Login.scss';
class Login extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.logout();

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    const { alert } = this.props;
    return (

      <div style={{paddingTop:'2rem'}}>
        <div  className="text-center">
          {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }  
        </div>
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-lg-3">

            </div>
            <div className="col-md-6 col-md-offset-3">
              <h2>Đăng nhập</h2>
              <form name="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                  <label htmlFor="username">Tên người dùng hoặc Email</label>
                  <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                  {submitted && !username &&
                    <div className="help-block text-danger">Yêu cầu nhập tên người dùng hoặc Email</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                  <label htmlFor="password">Mật khẩu</label>
                  <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                  {submitted && !password &&
                    <div className="help-block text-danger">Yêu cầu nhập mật khẩu</div>
                  }
                </div>
                <div className="form-group">
                  <button className="btn btn-primary">Đăng nhập</button>
                  {loggingIn &&
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  }
                  <Link to="/register" className="btn btn-link">Đăng ký</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapState(state) {
  const { loggingIn } = state.authentication;

  const { alert } = state;
  return { loggingIn, alert };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout,
  
  clearAlerts: alertActions.clear
};

export default Login = connect(mapState, actionCreators)(Login);