import React, { Component } from 'react'
import axios from 'axios'
class UserGet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errMsg: ''
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errMsg: 'Error Retrieving Data'})
        })
    }
    render() {
        const {posts, errMsg} = this.state
        return (
            <div>
                List Of Name
                {
                    posts.length ? posts.map(post => <div key={post.id}>{post.name} </div> ): null
                }
                {
                    errMsg ? <div>{errMsg}</div> : null
                }
            </div>
        )
    }
}

export default UserGet
