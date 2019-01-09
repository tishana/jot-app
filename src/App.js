import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Notes from './Notes'
import NewNote from './NewNote'
import About from './About'
import Note from './Note'
import './App.css'
// import axios from 'axios';
import listOfNotes from './notes.json'
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
          <h2><Link to="/notes">Jot</Link></h2>
          <h3><Link to="/about">about</Link></h3>
        </nav>
        <main>
          <Link to="/new"><button className="btn btn-success">+Note</button></Link>
          <Route exact path="/new" render={(props) => <NewNote
            setNote={this.setNote}
            {...props}
            {...this.state}
          />} />
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
          <Route exact path="/about" component={About} />




        </main>
      </div>
    )
  }
}

export default App
