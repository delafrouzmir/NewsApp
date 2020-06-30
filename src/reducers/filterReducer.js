import { PAGE_FILTER } from '../actions/types';

const initialState = {
    page: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PAGE_FILTER:
            console.log('filtering!');
            return {
                ...state,
                page: action.page
            };
        default:
            return state;
    }
}