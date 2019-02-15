import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './component/Counter';
import Todo from './component/Todo';
import store from './store';
import { Provider } from 'react-redux'
ReactDOM.render(<Provider store={store}>
    <div>
        <Counter />
        <Todo />
    </div>
</Provider>, window.root)