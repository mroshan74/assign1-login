import React from 'react'
import Login from './Login'
import UserProfile from './UserProfile'


class Authenticate extends React.Component{
    constructor(){
        super()
        this.state= {
            id:'',
            status:false
        }
    }

    passData = (getData) =>{
        this.setState({
            id:getData,
            status:true
        })
    }
    render(){
        console.log('authentication',this.state.id)
        return(
            <div>
                {this.state.status == false && <Login passData={this.passData}/>}
                {this.state.status == true && <UserProfile passId={this.state.id}/>}
            </div>
        )
    }

}

export default Authenticate