import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
const url = 'https://jot-tt.herokuapp.com/api/notes'
// const url = 'http://localhost:3001/api/notes'


class Notes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            note: {},
            notes: [],
            loading: false
        }
    }

    setNote = (note) => {
        this.setState({
            note
        })
    }

    setNotes = (notes) => {
        this.setState({
            notes
        })
    }


    componentDidMount() {
        this.setState({ loading: true })
        axios.get(url)
            .then(res => {
                let notes = res.data
                this.setNotes(notes)
                console.log(notes)
            })
            .then(() => {
                this.setState({ loading: false })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        let notes = this.state.notes.map((note, idx) => {
            return (
                <div key={idx} className="notes">
                    <h4><Link to={"/jot-app/" + note._id}>{note.title}</Link></h4>
                    <span><p>Created: {note.date}</p></span>
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

