import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
// import NewNotes from './newNote'
import About from '../src/About'
import Note from '../src/Note'
// import noteList from '../src/notes.json'
import './App.css';
import axios from 'axios';
const url = 'https://jot-tt.herokuapp.com/api/notes/'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: {},
      notes: []
    }
    this.setNote = this.setNote.bind(this)
    this.setNotes = this.setNotes.bind(this)
  }
  setNote(note) {
    this.setState({
      note: note
    })
  }
  setNotes(notes) {
    this.setState({
      notes: notes
    })
  }
  componentDidMount() {
    axios.get(url)
      .then(res => {
        let notes = res.data
        this.setNotes(notes)
        console.log(notes)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <header className="app">
          <nav>
            <h2><Link to="/">Jot</Link></h2>
            <h3><Link to="/about">about</Link></h3>
          </nav>
        </header>
        <main>
          <button className="btn btn-success">+</button>
          {this.state.notes.map((note, index) => <Note key={index} note={note} />)}
          <Route path="/about" component={About} />
        </main>
      </div >
    );
  }
}

export default App;
