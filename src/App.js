import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Notes from './Notes'
import NewNote from './NewNote'
import EditNote from './EditNote'
import About from './About'
import Note from './Note'
import './App.css'


class App extends Component {
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
          <Switch>
            <Route path="/jot-app/new" component={NewNote} />
            <Route path="/jot-app/:id/edit" component={EditNote} />
            <Route path="/jot-app/:id" component={Note} />
            <Route path="/jot-app" component={Notes} />
            <Route path="/about" component={About} />
          </Switch>




        </main>
      </div>
    )
  }
}

export default App
