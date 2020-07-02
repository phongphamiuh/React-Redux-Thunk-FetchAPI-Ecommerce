import React from 'react';
import SlideEffect from '../../components/SildeEffect/SlideEffect';
import ProductListHome from '../../containers/ProductListHome.js/ProductListHome';
const Home = () => {
    return (
        <React.Fragment>
            <did>
                <SlideEffect></SlideEffect> 
            </did>
            <div className="container">
                <div className="row">                          
                    <ProductListHome/>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Home;
