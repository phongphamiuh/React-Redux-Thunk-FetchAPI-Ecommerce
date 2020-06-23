import React from 'react';
import {connect} from 'react-redux';
import ProductDetailComponent from '../../components/ProductDetail/ProductDetail';
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import RateTab from "../../components/RateTab/RateTab";
const ProductDetail = (props) => {

    console.log(props);

    return (
        <div className="container" style={{padding: '6rem 0'}}>       
            <div>
                <div className="row">
                    <ProductSlider images={props.product.images}/>
                    <ProductDetailComponent product={props.product}/>                  
                </div>
                <RateTab />
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
