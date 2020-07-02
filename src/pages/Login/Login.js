import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { Formik } from "formik";
import {NavLink} from "react-router-dom";
import * as Yup from "yup";
import './Login.scss';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Login =() => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div>
        <div className="formi">
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
            }, 500);
            }}
            validationSchema={Yup.object().shape({
            email: Yup.string()
                .email()
                .required("Vui lòng nhập Email"),
            password: Yup.string()
                .required("Vui lòng nhập Password.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number.")
            })}
        >
            {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            return (
                <form onSubmit={handleSubmit} className="formi">
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="text"
                    placeholder="Nhập Email của bạn"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"}
                />
                {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                )}

                <label htmlFor="email">Password</label>

                <input
                    name="password"
                    type="password"
                    placeholder="Nhập Mật Khẩu của bạn"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                />
                {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                )}
                <button type="submit" disabled={isSubmitting}>
                    Đăng nhập
                </button>          
                <Button className="log-bt" variant="outlined" color="primary" onClick={handleClickOpen}>
                  Đăng Ký
                </Button>
                </form>
            );
            }}
        </Formik>
        </div>

        <div className="dialog">   
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Tạo tài khoản
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <div className="register">
                    <Formik
                        initialValues={{ name:"",sdt:"",email: "", password: "" }}
                        onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log("Logging in", values);
                            setSubmitting(false);
                        }, 500);
                        }}
                        validationSchema={Yup.object().shape({
                        name: Yup.string()                                        
                            .required("Vui lòng nhập họ tên"),
                        sdt: Yup.string()                                        
                        .required("Vui lòng nhập SĐT"),        
                        email: Yup.string()             
                            .email()
                            .required("Vui lòng nhập Email"),
                        password: Yup.string()
                            .required("Vui lòng nhập Password.")
                            .min(8, "Mật khẩu từ 6 đến 32 ký tự")
                            .max(32,"Mật khẩu từ 6 đến 32 ký tự")
                            .matches(/(?=.*[0-9])/, "Password phải chứa số.")
                        })}
                    >
                        {props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        } = props;
                        return (
                            <form onSubmit={handleSubmit} className="formi">                       
                            <label htmlFor="name">Họ tên</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Nhập họ tên"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.name && touched.name && "error"}
                            />
                            {errors.name && touched.name && (
                                <div className="input-feedback">{errors.name}</div>
                            )}
                            <label htmlFor="name">SĐT</label>
                            <input
                                name="sdt"
                                type="text"
                                placeholder="Nhập số điện thoại"
                                value={values.sdt}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.sdt && touched.sdt && "error"}
                            />
                            {errors.sdt && touched.sdt && (
                                <div className="input-feedback">{errors.sdt}</div>
                            )}
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="text"
                                placeholder="Nhập Email của bạn"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.email && touched.email && "error"}
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}

                            <label htmlFor="email">Password</label>

                            <input
                                name="password"
                                type="password"
                                placeholder="Nhập Mật Khẩu của bạn"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.password && touched.password && "error"}
                            />
                            {errors.password && touched.password && (
                                <div className="input-feedback">{errors.password}</div>
                            )}

                            <label htmlFor="sex">Giới tính</label>                          
                              <select 
                              name="sex"
                              value={values.sex}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              style={{ display: 'block' }}
                              >
                              <option value="" label="Giới tính" />
                              <option value="red" label="nam" />
                              <option value="blue" label="Nữ" />                          
                            </select>
                            

                            <button type="submit" disabled={isSubmitting}>
                              Đăng ký
                            </button>                       
                          </form>
                        );
                        }}
                    </Formik>
                </div>
              </Typography>            
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Chúc bạn có những trải nghiệm tốt nhất
              </Button>
            </DialogActions>
          </Dialog>
        </div>
    </div>
  );
}
export default Login;