import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router'
const url = 'https://jot-tt.herokuapp.com/api/notes'
// const url = 'http://localhost:3001/api/notes'


class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            redirect: false
        }

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value })
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value })
    }


    handleSubmit(event) {

        // Send a POST request
        axios({
            method: 'post',
            url: url,
            data: {
                title: this.state.title,
                text: this.state.text
            }
        })
            .then((res) => {
                this.setState({
                    id: res.data._id,
                    redirect: true
                })

            })
            .catch(err => { console.log(err) })
        event.preventDefault()
    }


    render() {

        if (this.state.redirect === true) {
            return <Redirect to={'/jot-app/' + this.state.id} />
        }

        return (
            <div className="note">
                <h3>New Note</h3>
                <form className="form-inline container" onSubmit={this.handleSubmit}>
                    <div>
                        <input name="title" size="51" type="text" value={this.state.title} onChange={this.handleTitleChange} placeholder="Title" />
                    </div>
                    <div>
                        <textarea name="text" rows="10" cols="50" value={this.state.text} onChange={this.handleTextChange} placeholder="Text" />
                    </div>
                    <div>
                        <input className="btn btn-info" type="submit" value="Create" />
                    </div>

                </form>
            </div>
        );
    }
}

export default NewNote