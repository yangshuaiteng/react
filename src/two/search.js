import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import jsonp from'jsonp'


function newJsonp(url,opts,callBack) {
    return new Promise((resolve,reject)=>{
        jsonp(url,opts,(err,data)=>{
            if (err) {
                reject(err)
            }
                resolve(data)
            
        })
    })
}
//async声明一个异步的函数
//await等待异步的结果
class Serach extends React.Component {
    constructor() {
        super();
        this.state={val:'',ary:[],index:-1}
    }
    
    handleChange= async (e)=>{
        let val=e.target.value
        this.wd=val
        /* let p=newJsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val,{param:"cb"})
        p.then(data=>{
            console.log(data);
        }) */
         let data= await newJsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val,{param:"cb"})
        console.log(data);
        let {s}=data;
        this.setState({val,ary:s})
    }
    down=(e)=>{
        if (e.keyCode===38||e.keyCode===40) {
            let index=this.state.index
            let ary=this.state.ary
            if (e.keyCode===38) {//往上移动
                index--;
                if (index<-1) {
                    index=ary.length-1
                }
            }else{//往下移动
                index++;
                if (index===ary.length) {
                    index=-1
                }
            }
            this.setState({val:ary[index]||this.wd,index})
        }
    }
    go=(e)=>{
        if (e.keyCode===13) {
            window.open("https://www.baidu.com/s?wd="+this.state.val)
        }
    }
    render() {
        return <div className='panel panel-warning'>
        <div className='panel-heading'>
            <input type="text" className="form-control" onChange={this.handleChange} onKeyDown={this.down} value={this.state.val} onKeyUp={this.go}/ >
        </div>
        <div className="panel-body">
            <ul className="list-group">
            {this.state.ary.map((item,index)=>
              <li className={(index===this.state.index?"active":"")+" list-group-item"} key={index}>{item}</li>            
            )}
            </ul>
        </div>
        </div>
    }
}

ReactDOM.render(<Serach/>, window.root)