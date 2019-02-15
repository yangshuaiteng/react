import React,{Component} from 'react';
import local from './Local'
class UserName extends Component{
    render(){
        return <div>
            用户名：<input type="text" value={this.props.val} onChange={()=>{}}/>
        </div>
    }
}
export default local("username")(UserName)
