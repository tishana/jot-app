import React, { Component } from 'react'
import axios from "axios"
const notesURL = 'https://jot-tt.herokuapp.com/api/notes/'



class Note extends Component {
    componentDidMount() {//after app mounts to the page
        const id = this.props.match.params.id//grab id from new path
        console.log(id)

        const url = `${notesURL}${id}/quote`
        console.log(url)

        axios.get(url)
            .then(response => {
                let stock = response.data// gets data returned as an object
                this.props.setStock(stock)//sets state of stock(App) 
                console.log(stock)
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