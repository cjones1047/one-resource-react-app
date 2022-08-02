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

// CREATE
export const createSupe = (user, newSupe) => {
    console.log('createSupe in API was hit')
    // inour createSupe form, we're building an object
    // when we pass that object into the api createSupe function
    // it's going to look like the supes in our database
    // we're going to refer to this as a newSupe, so we can just pass the entire object created by the form into an Axios request to our back-end (Supes API) and call it 'supe'
    console.log('this is user', user)
    console.log('this is newSupe', newSupe)
	return axios({
		url: apiUrl + '/supes',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: {
			supe: newSupe,
		},
	})
}