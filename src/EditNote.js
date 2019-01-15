import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router'


const noteUrl = 'https://jot-tt.herokuapp.com/api/notes/'



class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            redirect: false
        }

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        const id = this.props.match.params.id//grab id from new path
        console.log(id)

        const url = `${noteUrl}${id}`
        console.log(url)

        axios.get(url)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    text: res.data.text
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value })
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value })
    }


    handleSubmit(event) {
        const id = this.props.match.params.id//grab id from new path
        console.log(id)
        // Send a PUT request
        axios({
            method: 'put',
            url: `${noteUrl}${id}`,
            data: {
                title: this.state.title,
                text: this.state.text
            }
        })
            .then((res) => {
                this.setState({
                    id: res.data._id,
                    redirect: true
                })

            })
            .catch(err => { console.log(err) })
        event.preventDefault()
    }


    render() {

        if (this.state.redirect === true) {
            return <Redirect to={'/jot-app/' + this.state.id} />
        }

        return (
            <div className="note">
                <h3>Edit Note</h3>
                <form className="form-inline container" onSubmit={this.handleSubmit}>
                    <div>
                        <input name="title" size="51" type="text" value={this.state.title} onChange={this.handleTitleChange} placeholder="Title" />
                    </div>
                    <div>
                        <textarea name="text" rows="10" cols="50" value={this.state.text} onChange={this.handleTextChange} placeholder="Text" />
                    </div>
                    <div>
                        <input className="btn btn-primary" type="submit" value="Update" />
                    </div>

                </form>
            </div>
        );
    }
}

export default EditNote