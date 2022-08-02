import apiUrl from '../apiConfig'
import axios from 'axios'

// INDEX
export const getAllSupes = () => {
    return axios(`${apiUrl}/supes`)
}