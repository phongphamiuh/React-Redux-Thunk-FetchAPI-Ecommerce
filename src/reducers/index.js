import {combineReducers} from 'redux';
import shop from './shop.reducer';
import blog from './blog.reducer';
import {brandFilterReducer} from "./brand.filter.reducer";
import {orderByPriceReducer} from "./orderByPrice.filter.reducer";
import {paginationReducer} from "./pagination.reducer";

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
const rootReducer =combineReducers({
    shop,
    blog,
    brandFilter: brandFilterReducer,
    orderBy: orderByPriceReducer,
    pagination: paginationReducer,
   
    authentication,
    registration,
    users,
    alert
    
});
export default rootReducer;
