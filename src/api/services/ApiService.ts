import apiAxios from '../instances/apiAxios'
import qs from 'qs'

export const ApiService = {
    get(resource = '', params = {}, headers = {}) {
        const qString = qs.stringify(params, { addQueryPrefix: true })
        const url = resource + qString
        return apiAxios.get(url, headers)
    },
}
