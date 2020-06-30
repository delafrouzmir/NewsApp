import { FETCH_POSTS, NEW_POST, PAGE_FILTER } from '../actions/types';

const initialState = {
    items: [],
    page: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                items: action.payload
            };
        case PAGE_FILTER:
            return {
                ...state,
                page: action.page
            };
        default:
            return state;
    }
}