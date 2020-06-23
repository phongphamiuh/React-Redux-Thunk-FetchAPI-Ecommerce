import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import {addProductToCart} from "../../actions";
import './ProductDetail.scss';

const ProductDetail = (props) => {

    const {
        title,
        images,
        brand,
        price,
        author,
        date,
        ISBN,
        description,
        id,
    } = props.product;


    const onCart = () => {
        props.dispatch(addProductToCart(props.product));
    };

    return (
        <aside className="col-sm-7 col-xs-0">
            <article className="">
                <h3 className="title mb-3">{title}</h3>
                <dl className="param param-feature">
                    <dt>Tác giả</dt>
                    <dd>{author}</dd>
                </dl>
                <p className="price-detail-wrap">
                    <span className="price h3 text-warning">
                        <span className="currency">$</span><span className="num">{formatMoney(price)}</span>
                    </span>
                </p>
                <dl className="item-property">
                    <dt>Mô tả</dt>
                    <dd><p className="text-capitalize">{description}</p></dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Danh mục</dt>
                    <dd className="text-capitalize">{brand}</dd>
                </dl>
                <hr/>
                <hr/>
                <button
                    onClick={onCart}
                    className="btn btn-lg btn-outline-primary text-uppercase"><i
                    className="fa fa-shopping-cart"/> Add to cart
                </button>
            </article>
        </aside>
    );
};

export default connect()(ProductDetail);
