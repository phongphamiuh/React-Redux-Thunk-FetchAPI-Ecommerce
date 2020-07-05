import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {formatMoney} from "../../pipes/priceFormatter";
import {cumulativeOffSet} from "../../utilities/cumulativeOffset";

import './Product.scss';
import SlideDots from "../SlideDots/SlideDots";
import {addProductToCart} from "../../actions";


const Product = (props) => {

    const {
        title,
        price,
        images,
        date,
        id,
    } = props.product;

    const imageRef = React.createRef();
    const [img, setImg] = useState(images[0]);
    return (
        <div className="card h-55 product">
            <Link to={`/products/${id}`} className="product__link"><img                        
                className="card-img-top product__img" src={img} alt={title} ref={imageRef}/>              
            </Link>
            <div className="card-body product__text">
                <h4 className="card-title product__title">
                    <Link to={`/products/${id}`}>{title}</Link>
                </h4>
                <h5 className="product__price">${formatMoney(price)}</h5>
                <p className="card-text product__description">{date}</p>                             
            </div>
        </div>
    );
};

export default connect()(Product);

