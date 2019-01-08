import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios';
const url = 'https://jot-tt.herokuapp.com/api/notes/'

class Notes extends Component {
    componentDidMount() {
        axios.get(url)
            .then(res => {
                let notes = res.data
                this.props.setState({ notes: notes })// sets state of notes
                console.log(notes)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        let notes = this.props.notes.map((note, index) => {
            return (
                <div className="note" key={index.title}>
                    <h2>{note.title}</h2>
                    <h4>{note.date}</h4>
                    <p>{note.text}</p>
                </div>
            )
        })
        return (
            <div>
                {notes}
            </div>
        );
    }
}

export default Notes;

