import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './history/components/counter';
import Todo from './history/components/todo'
import store from './store';
import { Provider } from './react-redux'
ReactDOM.render(<Provider store={store}>
    <Todo />
    <Counter />
</Provider>, window.root)