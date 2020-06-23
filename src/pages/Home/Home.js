import React from 'react';
import SlideEffect from '../../components/SildeEffect/SlideEffect';
import ProductListHome from '../../containers/ProductListHome.js/ProductListHome';
const Home = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <SlideEffect></SlideEffect>          
                    <ProductListHome/>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Home;
