import React, { Component } from 'react'
import axios from 'axios'
class UserPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             title: '',
             body: ''
        }
    }
    chnageHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        // this.setState({})
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => {
            console.log(response)
            console.log('Done...!')
        }).catch(error => {
            console.log(error)
        })
        
    }
    
    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <div><input type="text" placeholder="userId" name="userId" value={userId} onChange={this.chnageHandler}/></div>
                <div><input type="text" placeholder="title" name="title" value={title} onChange={this.chnageHandler}/></div>
                <div><input type="text" placeholder="body" name="body" value={body} onChange={this.chnageHandler}/></div>
                <div><button type='submit'>Submit</button></div>

                </form>
            </div>
        )
    }
}

export default UserPost
