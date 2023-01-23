import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import EditNote from './components/EditNote'
import About from './pages/About'
import './App.css'

export default function App() {
  return (
    <div>
      <header className="app">
        <nav>
          <Link className="logo" to="/jot-app">Jot</Link>
          <Link className="about" to="/about">about</Link>
        </nav>

      </header>
      <Router>
        <Routes>
          <Route path="/jot-app/new" element={NewNote} />
          <Route path="/jot-app/:id/edit" element={EditNote} />
          <Route path="/" element={Notes} />
          <Route path="/about" element={About} />
        </Routes>
      </Router>

    </div>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <header className="app">
//           <nav>
//             <Link className="logo" to="/jot-app">Jot</Link>
//             <Link className="about" to="/about">about</Link>
//           </nav>

//         </header>
//         <main>
//           <Link to="/jot-app/new"><button className="btn btn-success">+Note</button></Link>
//           <Switch>
//             <Route path="/jot-app/new" component={NewNote} />
//             <Route path="/jot-app/:id/edit" component={EditNote} />
//             <Route path="/jot-app/:id" component={Note} />
//             <Route path="/jot-app" component={Notes} />
//             <Route path="/about" component={About} />
//           </Switch>




//         </main>
//       </div>
//     )
//   }
// }

// export default App
