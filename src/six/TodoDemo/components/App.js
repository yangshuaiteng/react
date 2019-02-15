import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter'
class App extends React.Component {
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-8 cpl-md-offset-2">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <TodoHeader></TodoHeader>
                        </div>
                        <div className="panel-body">
                            <TodoList></TodoList>
                        </div>
                        <div className="panel-footer">
                            <TodoFooter></TodoFooter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default App