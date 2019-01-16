import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router';
import { Link } from "react-router-dom"
const notesURL = "https://jot-tt.herokuapp.com/api/notes/"
// const notesURL = 'http://localhost:3001/api/notes/'

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
            notes: [],
            title: '',
            text: '',
            redirect: false
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

    handleDeleteNote = (event) => {
        this.setState({ redirect: true })
        axios.delete(notesURL + this.props.match.params.id)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount() {//after app mounts to the page
        const id = this.props.match.params.id//grab id from new path
        console.log(id)

        const url = `${notesURL}${id}`
        console.log(url)

        axios.get(url)
            .then(response => {
                let note = response.data// gets data returned as an object
                this.setNote(note)
                console.log(note)
            })
            .catch(err => {
                console.error(err)
            })

    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={'/jot-app'} />
        } else {

            return (
                <div className="note">
                    <span><h2>{this.state.note.title}</h2></span>
                    <span><h6>Created: {this.state.note.date}</h6></span>
                    <span><p>{this.state.note.text}</p></span>
                    <Link to={"/jot-app/" + this.state.note._id + "/edit"}><button className="btn btn-info">Edit</button></Link><button onClick={this.handleDeleteNote} className="btn btn-danger">Delete</button>
                </div >
            )
        }
    }
}

export default Note