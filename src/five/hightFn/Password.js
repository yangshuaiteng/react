import React,{Component} from 'react';
import local from './Local'
class Password extends Component{
    render(){
        return <div>
            密码：<input type="password" value={this.props.val} onChange={()=>{}}/><br/>
            确认密码：<input type="password" value={this.props.val} onChange={()=>{}}/>
        </div>
    }
}
export default local("password")(Password)
