import {combineReducers} from 'redux';
import shop from './shop.reducer';
import blog from './blog.reducer';
import {brandFilterReducer} from "./brand.filter.reducer";
import {orderByPriceReducer} from "./orderByPrice.filter.reducer";
import {paginationReducer} from "./pagination.reducer";


export default combineReducers({
    shop,
    blog,
    brandFilter: brandFilterReducer,
    orderBy: orderByPriceReducer,
    pagination: paginationReducer
});
