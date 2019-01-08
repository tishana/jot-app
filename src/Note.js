import React, { Component } from 'react'
import { Link } from "react-router-dom"

// import axios from "axios"
// const notesURL = 'https://jot-tt.herokuapp.com/api/notes/'



class Note extends Component {


    render() {

        return (
            <div className="note">
                <span><h2><Link to={"#"}>{this.props.note.title}</Link></h2></span>
                <span><h6>Date: {this.props.note.date}</h6></span>
                <span><p>Text: {this.props.note.text}</p></span>
                <button className="btn btn-info">Edit</button><button className="btn btn-danger">Delete</button>
            </div >
        )
    }

}

export default Note