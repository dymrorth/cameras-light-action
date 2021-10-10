import axios from 'axios'

const instance = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })

/* Request interceptors */
instance.interceptors.request.use(
    request => {
        // Edit request config
        return request
    },
    error => {
        // Edit request error
        return Promise.reject(error)
    }
)

/* Response interceptors */
instance.interceptors.response.use(
    res => {
        // Edit res config
        return res
    },
    error => {
        // Edit res error
        return Promise.reject(error)
    }
)

export default instance
