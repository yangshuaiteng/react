import React from 'react';
import Nav from './Nav'
class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Nav />
                </div>
            </div>
            <div className="row">
                {this.props.children}
            </div>
        </div>
    }
}
export default App