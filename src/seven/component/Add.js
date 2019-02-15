import React from 'react'
class Add extends React.Component {
    constructor() {
        super();
    }
    handleClick=()=>{
        let users=JSON.parse(localStorage.getItem("users"))||[];
        let user={id:Math.random(),text:this.a.value};
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
        this.a.value="";
        console.log(this.props);
        this.props.history.push("/user/list")
    }
    render() {
        return <div>
        <input type="text" className="form-control" ref={x=>this.a=x}/>
        <input type="button" className="btn btn-primary" value="提交"  style={{"marginTop":"12px"}} onClick={this.handleClick}/>
        </div>
    }
}
export default Add