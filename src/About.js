import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="about-div">
                <h4>About Jot...</h4>
                <p>Jot is a note app for your personal use. You can add, edit, and delete notes.</p>

                <h4>How To Use Jot...</h4>
                <p>Simply click on Home to see to notes. To view a particular note, click on it's title! Once there, you can choose to edit or delete the shown note. Go nuts!</p>

                <h4>About the creator...</h4>
                <p>I'm Tishana, a fullstack web developer in the DC Metro Area. I love to create practical apps dedicated to personal goals and organization. You can see more of my work <a href="https://tishana.github.io/">here</a>.Thanks for viewing Jot.</p>
            </div>
        )
    }
}

export default About