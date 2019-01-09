import React, { Component } from 'react'
import axios from "axios"
const notesURL = 'http://localhost:3001/api/notes/'



class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            redirect: false
        }

        this.handleDeleteNote = this.handleDeleteNote.bind(this)

    }
    handleDeleteNote(event) {
        // set up for finding note by id then deleting
    }
    componentDidMount() {//after app mounts to the page
        const id = this.props.match.params.id//grab id from new path
        console.log(id)

        const url = `${notesURL}${id}`
        console.log(url)

        axios.get(url)
            .then(response => {
                let note = response.data// gets data returned as an object
                this.props.setNote(note)
                console.log(note)
            })
            .catch(err => {
                console.error(err)
            })

    }

    render() {

        return (
            <div className="note">
                <span><h2>{this.props.note.title}</h2></span>
                <span><h6>Date: {this.props.note.date}</h6></span>
                <span><p>Text: {this.props.note.text}</p></span>
                <button className="btn btn-info">Edit</button><button className="btn btn-danger">x</button>
            </div >
        )
    }
}

export default Note