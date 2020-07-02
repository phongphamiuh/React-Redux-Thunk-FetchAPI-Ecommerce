import React from 'react';
import {connect} from 'react-redux';
import ProductDetailComponent from '../../components/ProductDetail/ProductDetail';
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ExpansionPn from "../../components/ExpansionPn/ExpansionPn";
import RateTab from "../../components/RateTab/RateTab";
import './ProductDetail.scss'
const ProductDetail = (props) => {

    console.log(props);

    return (
        <div className="container" style={{padding: '6rem 0'}}>       
            <div>
                <div className="row">
                    <ProductSlider images={props.product.images}/>
                    <ProductDetailComponent product={props.product}/> 
                    <ExpansionPn product={props.product}></ExpansionPn>                 
                </div>
                <RateTab product={props.product} />
            </div>
        </div>
    );
};
const mapStateToProps = (state, props) =>  {
    const product = state.shop.products.find(product => product.id === +props.match.params.id);
    return {
        product
    }
};
export default connect(mapStateToProps, null)(ProductDetail);
