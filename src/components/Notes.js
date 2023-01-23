import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Create from './NewNote'
import { getNotes } from '../services/note-api'
// const url = 'https://jot-tt.herokuapp.com/api/notes'
// const url = 'http://localhost:3001/api/notes'

export default function Notes() {

    const [notes, setNotes] = useState([])
    useEffect(() => {
        getNotes() // calling the function to get the data
            .then(res => setNotes(res.data)) // setting state with returned data
    }, [])
    // console.log(notes)

    let allNotes = notes.map((note, idx) => {
        return (
            <div key={idx} className='notes'>
                <h4><Link to={'/jot-app' + note._id}>{note.title}</Link></h4>
                <span><p>Created: {note.date}</p></span>
            </div>
        )
    })

    return (
        <>

            <div className='container'>
                {allNotes}
            </div>
            < Create />
        </>
    )
}

// class Notes extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             note: {},
//             notes: []
//         }
//     }

//     setNote = (note) => {
//         this.setState({
//             note
//         })
//     }

//     setNotes = (notes) => {
//         this.setState({
//             notes
//         })
//     }


//     componentDidMount() {
//         axios.get(url)
//             .then(res => {
//                 let notes = res.data
//                 this.setNotes(notes)
//                 console.log(notes)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     render() {
//         let notes = this.state.notes.map((note, idx) => {
//             return (
//                 <div key={idx} className="notes">
//                     <h4><Link to={"/jot-app/" + note._id}>{note.title}</Link></h4>
//                     <span><p>Created: {note.date}</p></span>
//                 </div>
//             )
//         })
//         return (
//             <div className="container">
//                 {notes}
//             </div>
//         )
//     }
// }

// export default Notes;

