import React from 'react';
import { Formik , Field} from "formik";
import {NavLink} from "react-router-dom";
import * as Yup from "yup";
import './OrderAdress.scss'
const options = [
    {
      label: "Option 1",
      value: 1
    },
    {
      label: "Option 2",
      value: 2
    },
    {
      label: "Option 3",
      value: 3
    },
    {
      label: "Option 4",
      value: 4
    }
  ];
const OrderAdress=()=>{

    return(
        <div>
            <div>

            </div>
            <div className="order">
                <h2 className="text-center m-3">Đơn đặt hàng</h2>
                <Formik
                    initialValues={{ name:"",sdt:"",email: "", password: "",address:"", checkboxGroup: [] }}
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
                    address: Yup.string()
                        .required("Vui lòng nhập địa chỉ.")              
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
                        
                        <label htmlFor="name">Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Nhập số điện thoại"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.name && touched.name && "error"}
                        />
                        {errors.name && touched.name && (
                            <div className="input-feedback">{errors.name}</div>
                        )}

                        <label htmlFor="sdt">SĐT</label>
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

                        <label htmlFor="city">Tỉnh/Thành phố</label>                          
                        <select 
                        name="city"
                        value={values.sex}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ display: 'block' }}
                        >
                        <option value="" label="Hồ Chí Minh" />
                        <option value="red" label="BRVT" />
                        <option value="blue" label="MT" />                          
                        </select>

                        <label htmlFor="q">Quận huyện</label>                          
                        <select 
                        name="q"
                        value={values.q}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ display: 'block' }}
                        >
                        <option value="" label="Châu Đức" />
                        <option value="red" label="CĐ" />
                        <option value="blue" label="CĐ" />                          
                        </select>

                        <label htmlFor="p">Phường/Xã</label>                          
                        <select 
                        name="p"
                        value={values.p}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ display: 'block' }}
                        >
                        <option value="" label="Thị Trấn Ngãi Giao" />
                        <option value="red" label="NG" />
                        <option value="blue" label="NG" />                          
                        </select>


                        <label htmlFor="address">Địa chỉ</label>
                        <textarea
                            name="address"
                            type="text"
                            placeholder="Địa chỉ"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.address && touched.address && "error"}
                        />
                        {errors.address && touched.address && (
                            <div className="input-feedback">{errors.address}</div>
                        )}
                            
                        <button type="submit" disabled={isSubmitting}>
                        Xác nhận
                        </button>                       
                    </form>
                    );
                    }}
                </Formik>
            </div>
        </div>
    )
}
export default OrderAdress;