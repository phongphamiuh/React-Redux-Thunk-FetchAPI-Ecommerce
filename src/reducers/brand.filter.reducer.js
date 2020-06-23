import {ADD_BOOK_TO_FILTER, REMOVE_BOOK_FROM_FILTER} from "../actions";

export const  brandFilterReducer = (state = '', action) => {
    switch (action.type) {
        case ADD_BOOK_TO_FILTER:
            if(state.includes(action.category)) return state;
            return state += action.category;
        case REMOVE_BOOK_FROM_FILTER:
            console.log('remove brand', action);
            const reg = new RegExp(action.category, 'gi');
            return state.replace(reg, '');
        default:
            return state;
    }
};

