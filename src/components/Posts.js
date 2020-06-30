import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const newWindow = (article) => {
            console.log('new window called!');
            var myWindow = window.open(article.url, "_blank");
            myWindow.document.write(article.content);
        };

        let nextId = 0;

        console.log('see here! ' + this.props.page);

        let postItems = this.props.posts.map(article => ({
            ...article,
            articleId: nextId++
        })).filter(article => (article.articleId < (this.props.page + 1) * 10 && article.articleId >= this.props.page * 10));

        postItems = postItems.map(article => (
            <div key={article.articleId}>
                <p>{article.articleId}</p>
                <a href={article.url} target="_blank" onClick={() => newWindow(article)}><h3>{article.title}</h3></a>
                <p>{article.author}</p>
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
    page: state.posts.page
});

export default connect(mapStateToProps, { fetchPosts })(Posts);