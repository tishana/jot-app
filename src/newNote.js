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

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }


    handleSubmit(event) {

        // Send a POST request
        axios({
            method: 'post',
            url: backendBaseUrl + postEndPoint,
            data: {
                title: this.state.text,
                date: Date.now(),
                text: this.state.text
            }
        })
            .then((dataResult) => this.setState({ id: dataResult.data._id }))
            .then(() => this.setState({ redirect: true }));
        event.preventDefault();
    }


    render() {

        if (this.state.redirect === true) {
            return <Redirect to={'/note/' + this.state.id} />
        }

        return (
            <div className="note">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <h1>New Note</h1>
                    <div>
                        <div>
                            <input type="text" value={this.state.title} onChange={this.handleTitleChange} placeholder="Title" />
                        </div>
                        <div>
                            <input type="text" value={this.state.text} onChange={this.handleTextChange} placeholder="Text" />
                        </div>
                        <div>
                            <input type="submit" value="Save" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewNote