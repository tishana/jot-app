import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
const url = 'https://jot-tt.herokuapp.com/api/notes'

class Notes extends Component {
    componentDidMount() {
        axios.get(url)
            .then(res => {
                let notes = res.data
                this.props.setNotes(notes)
                console.log(notes)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        let notes = this.props.notes.map((note, idx) => {
            return (
                <div key={idx} className="notes">
                    <h4><Link to={"/notes/" + note._id}>{note.title}</Link></h4>
                    <span><p>Date: {note.date}</p></span>
                </div>
            )
        })
        return (
            <div className="container">
                {notes}
            </div>
        )
    }
}

export default Notes;

