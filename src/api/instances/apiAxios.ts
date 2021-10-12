import axios from 'axios'

const instance = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })

instance.interceptors.request.use(
    request => {
        const token = `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`
        if (request?.headers) {
            request.headers.Authorization = token
        }
        return request
    },
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    res => {
        return res
    },
    error => {
        return Promise.reject(error)
    }
)

export default instance
