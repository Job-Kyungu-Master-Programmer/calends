import axios from "axios";

// Base Connexion  //
const baseUrlPub = 'http://localhost:3001/pub'
const baseUrlUser = 'http://localhost:3001/user'

//.. connexion publication 
const getAll  = () => {
    const request = axios.get(baseUrlPub)
    return request.then(response => response.data)
}

const createPub = object => {
    const request = axios.post(baseUrlPub, object)
    return request.then(response => response.data)
}

const delet = (id, object) =>  {
    const request = axios.delete(`${baseUrlPub}/${id}`, object)
    return request.then(response => response.data)
}

const like = (id, object) => {
    const request = axios.put(`${baseUrlPub}/${id}`, object)
    return request.then(response => response.data)
}

//... Connexion Users 
const createUser = object => {
    const request = axios.post(object, baseUrlUser)
    return request.then(response => response.data)
}

const getUser = () => {
    const request = axios.get(baseUrlUser)
    return request.then(response => response.data)
}

export default {
    getAll,
    createPub,
    delet,
    like,
    // For User login
    createUser,
    getUser
}
