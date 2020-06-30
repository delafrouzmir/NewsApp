import { FETCH_POSTS, NEW_POST, PAGE_FILTER } from './types';

export const fetchPosts = () => dispatch => {
    var url = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=a6d2bb8ef6af412e91bf6badb87a8ff2';
    var req = new Request(url);
    fetch(req)
        .then(function (response) {
            console.log(response.json());
        });

    fetch(req)
        .then(res => res.json())
            .then(res => dispatch({
                type: FETCH_POSTS,
                payload: res.articles
            }))
};

export const createPost = postData => dispatch => {
    var url = 'http://newsapi.org/v2/everything?' +
        'q=' + postData.title + '&' +
        'from=2020-06-30&' +
        'sortBy=popularity&' +
        'apiKey=a6d2bb8ef6af412e91bf6badb87a8ff2';

    var req = new Request(url);

    fetch(req)
        .then(res => res.json())
        .then(res => dispatch({
            type: NEW_POST,
            payload: res.articles
        }))
    //console.log(postData);
};

export const pageFilter = pageNum => dispatch => {
    dispatch({
        type: PAGE_FILTER,
        page: pageNum
    })
};