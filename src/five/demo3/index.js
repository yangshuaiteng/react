import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/reducer';//createStore(reducer)
import Counter from './components/Counter';

ReactDOM.render(<Provider store={store}>
    <Counter/>
</Provider>,window.root)



