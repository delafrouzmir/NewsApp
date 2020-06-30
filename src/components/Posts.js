import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

const getVisiblePosts = (articles, page) => {

    let nextId = 0;

    return (articles.map(article => ({
        ...article,
        articleId: nextId++
    })).filter(article => (article.articleId < (page + 1) * 10 && article.articleId >= page * 10)));
};

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const newWindow = (article) => {
            //console.log('new window called!');
            var myWindow = window.open(article.url, "_blank");
            myWindow.document.write(article.content);
        };

        //console.log('see here! ' + this.props.page);

        const postItems = getVisiblePosts(this.props.posts, this.props.page).map(article => (
            <div key={article.articleId}>
                <a href={article.url} target="_blank" rel="noopener noreferrer"
                    onClick={() => newWindow(article)}>
                    <h3>{article.articleId + 1 + ') '}{article.title}</h3>
                </a>
                <p>{'By: '}{article.author}</p>
                <p>{article.content}</p>
                <hr></hr>
            </div>
        ));


        return (
            <div>
                <h1>Articles:</h1>
                {postItems}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    page: state.filter.page
});

export default connect(mapStateToProps, { fetchPosts })(Posts);