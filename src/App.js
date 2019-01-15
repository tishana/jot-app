import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Notes from './Notes'
import NewNote from './newNote'
import EditNote from './EditNote'
import About from './About'
import Note from './Note'
import './App.css'


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
        <header className="app">
          <nav>
            <Link className="logo" to="/jot-app">Jot</Link>
            <Link className="about" to="/about">about</Link>
          </nav>

        </header>
        <main>
          <Link to="/jot-app/new"><button className="btn btn-success">+Note</button></Link>
          <Route exact path="/jot-app/new" render={(props) => <NewNote
            setNote={this.setNote}
            {...props}
            {...this.state}
          />} />
          <Route exact path="/jot-app/:id/edit" render={(props) => <EditNote
            setNote={this.setNote}
            {...props}
            {...this.state}
          />} />
          <Route exact path="/jot-app/:id" render={(props) => <Note
            setNote={this.setNote}
            {...props}
            {...this.state}
          />} />
          <Route exact path="/jot-app" render={(props) => <Notes
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
