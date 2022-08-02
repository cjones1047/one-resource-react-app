import apiUrl from '../apiConfig'
import axios from 'axios'

// INDEX
export const getAllSupes = () => {
    return axios(`${apiUrl}/supes`)
}

// SHOW
export const getOneSupe = (id) => {
    return axios(`${apiUrl}/supes/${id}`)
}