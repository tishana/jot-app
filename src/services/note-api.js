// All of our endpoints
import axios from 'axios'
const baseURL = 'http://localhost:3001/api/notes'

// Show all Notes
export const getNotes = () => {
    const URL = baseURL // our base url
    const response = axios.get(URL) // using axios's get functionality to grab our Notes
    return response
}

// Show a Note
export const getNote = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

// Edit the Note
export const editNote = (id, updatedNote) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedNote)
    return response
}
// Create the Note
export const createTodo = (note) => {
    const URL = baseURL
    const response = axios.post(URL, note)
    return response
}
// Delete the Note
export const deleteNote = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}