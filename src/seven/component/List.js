import React from 'react'
class List extends React.Component {
    constructor() {
        super();
    }
    componentWillMount(){
        let users=JSON.parse(localStorage.getItem("users"))||[];
        this.users=users;
    }
    render() {
        console.log(this);
        
        return <div>
            <table className="table"><tr><th>ID</th><th>用户名</th></tr>
                
                {this.users.map((item,index)=>{
                    return (
                        <tr key={index}><td>{item.id}</td><td>{item.text}</td></tr>
                    )
                })}
             
            </table>
        </div>
    }
}
export default List