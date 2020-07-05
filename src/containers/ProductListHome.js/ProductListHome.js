import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductList from "../../components/ProductList/ProductList";
import {brandFilter} from "../../pipes/brandFilter";
import {orderByFilter} from "../../pipes/orderByFilter";
import {paginationPipe} from "../../pipes/paginationFilter";
import './ProductListHome.scss';

class ProductListHome extends Component {

    state = {      
        perPage: 12,
        currentPage: 1,
        pagesToShow: 3,   
    };
    onPrev = () => {
        const updatedState = {...this.state};
        updatedState.currentPage = this.state.currentPage - 1;
        this.setState(updatedState);
    };


    onNext = () => {
        this.setState({
            ...this.state,
            currentPage: this.state.currentPage + 1
        });
    };

    goPage = (n) => {
        this.setState({
            ...this.state,
            currentPage: n
        });
    };


    render() {

       
        return (
            <div className="col-lg-12 list-product">
                <h3 className="m-2">HighLights</h3>
                <div className="row">
                    {paginationPipe(this.props.products, this.state).map(product =>{                     
                        return (<div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <ProductList key={product.id} product={product} />
                        </div>)
                    })}                                 
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    const brands = state.brandFilter;
    const orderBy = state.orderBy;

    const filterByBrandArr = brandFilter(state.shop.products, brands);
    const filterByOrderArr = orderByFilter(filterByBrandArr, orderBy);
    return {products: filterByOrderArr }
};

export default connect(mapStateToProps, null)(ProductListHome);
