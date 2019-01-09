import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { Redirect } from 'react-router'
import Note from './Note'
import noteList from '../src/notes.json'

const backendBaseUrl = 'https://jot-tt.herokuapp.com'
const postEndPoint = '/api/notes/'

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
            url: "https://jot-tt.herokuapp.com/api/notes",
            data: {
                title: this.state.text,
                text: this.state.text
            }
        })
            .then((res) => {
                this.setState({
                    id: res.data._id,
                    redirect: true
                })

            })
            // .then(() => this.setState({ redirect: true }))
            .catch(err => { console.log(err) })
        event.preventDefault()
    }


    render() {

        if (this.state.redirect === true) {
            return <Redirect to={'/notes/' + this.state.id} />
        }

        return (
            <div className="note">
                <h3>New Note</h3>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div>
                        <input name="title" size="50" type="text" value={this.state.title} onChange={this.handleTitleChange} placeholder="Title" />
                    </div>
                    <div>
                        <textarea name="text" rows="4" cols="50" value={this.state.text} onChange={this.handleTextChange} placeholder="Text" />
                    </div>
                    <div>
                        <input type="submit" value="Save" />
                    </div>

                </form>
            </div>
        );
    }
}

export default NewNote