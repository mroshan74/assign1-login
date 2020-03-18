import React from 'react'
import axios from 'axios'

class UserProfile extends React.Component{
    constructor(){
        super()
        this.state={
            user:[],
            posts:[]
        }
    }

    componentDidMount(){
        console.log('user profile component', this.props.passId)
        const uid = localStorage.length != 0 ? localStorage.getItem('storedId') : this.props.passId
        axios
          .get(
            `https://jsonplaceholder.typicode.com/users/${uid}`
          )
          .then(response => {
            const user = response.data;
            this.setState({ user });
          })
          .catch(err => {
            console.log(err);
          });

        axios
          .get(
            `https://jsonplaceholder.typicode.com/posts?userId=${uid}`
          )
          .then(response => {
            const posts = response.data;
            this.setState({ posts });
          })
          .catch(err => {
            console.log(err);
          });
        
    }
    
    handleOut=()=>{
        localStorage.clear();
        window.location.reload(false)
    }

    render(){
        //console.log(this.state.user,this.state.posts)
        return (
          <div>
            <button onClick={this.handleOut}>Log out</button>
            <h2>{this.state.user.name}</h2>
            <p>{this.state.user.email}</p>
            <p>{this.state.user.phone}</p>

            <p>{this.state.user.website}</p>

            <br />
            <hr />
            <h3>Posts made</h3>
            <ul>
              {this.state.posts.map((post, i) => {
                return (
                  <li key={i}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )
    }
}

export default UserProfile