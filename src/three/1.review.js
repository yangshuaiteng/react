import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import jsonp from 'jsonp';

function newJsonp(url,opts,callback) {
return new Promise((resolve,reject)=>{
    jsonp(url,opts,(err,data)=>{
        if (err) {
            reject(err)
        }
        resolve(data)
    })
})
}

class Search extends React.Component {
    constructor() {
        super()
        this.state={val:'',ary:[],index:-1}
    }
    handleChange=async (e)=>{
        let val=e.target.value
        this.wd=val
        //请求百度的接口拿到数据并保存在状态中
       let data= await newJsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val,{param:'cb'})
       let {s}=data
       this.setState({val,ary:s})

    }
    down=(e)=>{
        if (e.keyCode===38||e.keyCode===40) {
            let index=this.state.index;
            let ary=this.state.ary
            if (e.keyCode===38) {
                index--;
                if (index<-1) {
                    index=ary.length-1
                }
            }else{
                index++;
                if (index===ary.length) {
                    index=-1
                }
            }
            this.setState({index,val:ary[index]||this.wd})
        }
    }
    enter=(e)=>{
        if (e.keyCode===13) {
           window.open("https://www.baidu.com/s?wd="+this.state.val) 
        }
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <input type="text" className="from-control" onChange={this.handleChange} value={this.state.val} onKeyDown={this.down} onKeyUp={this.enter}/>
                </div>
                <div className='panel-body'>
                    <ul className="list-group">
                    {this.state.ary.map((item,index)=>{
                        return <li className={(index===this.state.index?"active":"")+" list-group-item"} key={index}>
                            {item}
                            </li>
                    })}
                        
                    </ul>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Search />, window.root)