import React from "react"
import axios from "axios"
import UserProfile from "./UserProfile"

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      users:[],
      status: false,
      id:''
    }
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users=response.data
        this.setState({users})
      })
  }

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = e => {
      e.preventDefault()
      const validEmail = this.state.users.find(user => user.email==this.state.email)
      if(validEmail){
        console.log('Found Email',validEmail)
        this.props.passData(validEmail.id)
        localStorage.setItem("storedId", validEmail.id);
      }
      else{
        alert('No such email found')
      }
  }

  render(){
    return(
      <div>
        { localStorage.length != 0 ? <UserProfile/> :
        <div>
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <input type='email' id='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='enter email here' />
            <p> type email and press enter</p>
          </form>
          </div>
        }
      </div>
    )
  }
}

export default Login