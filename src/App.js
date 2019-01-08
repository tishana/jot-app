import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Notes from './Notes'
import About from '../src/About'
import Note from '../src/Note'
import './App.css'
// import axios from 'axios';
import listOfNotes from '../src/notes.json'
// const url = 'https://jot-tt.herokuapp.com/api/notes/'


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



  render() {
    return (
      <div>
        <nav className="app">
          <h2><Link to="/">Jot</Link></h2>
          <h3><Link to="/about">about</Link></h3>
        </nav>
        <main>
          <button className="btn btn-success">+Note</button>
          <Route exact path="/notes/:id" render={(props) => <Note
            setNote={this.setNote}
            notes={listOfNotes}
            {...props}
            {...this.state}
          />} />
          <Route exact path="/notes" render={(props) => <Notes
            notes={listOfNotes}
            setNotes={this.setNotes}
            {...props}
            {...this.state}
          />} />
          <Route path="/about" component={About} />




        </main>
      </div>
    )
  }
}

export default App
