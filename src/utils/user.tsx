import axios from "axios"
import { Creds } from "./types"


const baseUrl = "http://127.0.0.1:8000/api/"

const signup = async (body: Creds) => {
    const request = axios.post(`${baseUrl}/register`,body)
    return request.then(response => response)
}

const login = async (body: Creds) => {
    const request = axios.post(`${baseUrl}/login`, body)
    return request.then(response => response)
}



export default {signup, login}