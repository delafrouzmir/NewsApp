import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pageFilter } from '../actions/postActions';

class PageFilter extends Component {
    //constructor(props) {
    //    super(props);
    //    this.state = {
    //        keyword: ''
    //    };

    //    this.onChange = this.onChange.bind(this);
    //    this.onSubmit = this.onSubmit.bind(this);
    //}

    //onChange(e) {
    //    this.setState({ [e.target.name]: e.target.value });
    //}

    //onSubmit(e) {
    //    e.preventDefault();

    //    const post = {
    //        title: this.state.keyword
    //    };

    //    this.props.createPost(post);
    //}

    render() {
        return (
            <div>
                <label>pages: </label>
                <a href='' onClick={() => this.props.pageFilter(0)}>1</a>
                <span>{', '}</span>
                <a href='' onClick={() => this.props.pageFilter(1)}>2</a>
            </div>
        );
    }
}

PageFilter.propTypes = {
    pageFilter: PropTypes.func.isRequired
};

export default connect(null, { pageFilter })(PageFilter);