import { useState } from "react";
import SupeForm from "../shared/SupeForm";
import { createSupe } from "../../api/supes";
import { createSupeSuccess, createSupeFailure } from "../shared/AutoDismissAlert/messages";
import { useNavigate } from "react-router-dom";

const CreateSupe = (props) => {
    console.log('these are the props\n', props)
    const {user, msgAlert} = props
    const [supe, setSupe] = useState({
        name: '',
        description: '',
        rating: '',
        hero: false
    })

    const navigate = useNavigate()

    console.log('this is supe in createSupe', supe)

    const handleChange = (e) => {
        setSupe(prevSupe => {
            let updatedValue = e.target.value
            const updatedName = e.target.name

            console.log('this is the input type', e.target.type)

            if (e.target.type === 'number') {
                // this is looking at the input type, and changing it from the default, which is the string, into an actual number
                updatedValue = parseInt(e.target.value)
            }

            // this handles the checkbox, changing on to true, etc.
            if (updatedName === "hero" && e.target.checked) {
                updatedValue = true
            } else if (updatedName === "hero" && !e.target.checked) {
                updatedValue = false
            }

            const updatedSupe = { [updatedName]: updatedValue}
            return {
                ...prevSupe,
                ...updatedSupe
            }
        })
    }

    const handleSubmit = (e) => {
        // e equals event
        e.preventDefault()

        createSupe(user, supe)
            // if we're successful, navigate to the show page for the new supe
            .then(res => {
                navigate(`/supes/${res.data.supe._id}`)
            })
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: createSupeSuccess,
                    variant: 'success'
                })
            })
            // if there is an error, tell the user about it
            .catch(() => {
                msgAlert({
                    heading: 'Oh no!',
                    message: createSupeFailure,
                    variant: 'danger'
                })
            })
    }

    // we'll add a handleSubmit here that makes an api request, then handles the response

    return (
        <SupeForm
            supe={ supe } 
            handleChange={ handleChange } 
            handleSubmit= {handleSubmit}
            heading="Add a new supe:" 
            />
    )
}

export default CreateSupe