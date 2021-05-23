import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000" })

export const createSession = cartData =>
  API.post("/create-checkout-session", cartData)
