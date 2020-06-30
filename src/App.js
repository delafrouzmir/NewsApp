import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';
import PageFilter from './components/PageFilter';

import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <PostForm />
                    <br></br>
                    <PageFilter />
                    <Posts />
                </div>
            </Provider>
        );
    }
}

export default App;