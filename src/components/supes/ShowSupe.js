
import { useState, useEffect } from 'react'

// this will allow us to see our parameters
import { useParams, useNavigate } from 'react-router-dom'
// useNavigate will allow us to navigate to a specific page

import { Container, Card, Button } from 'react-bootstrap'

import LoadingScreen from '../shared/LoadingScreen'
import { getOneSupe } from '../../api/supes'
import messages from '../shared/AutoDismissAlert/messages'

// We need to get the supe's id from the parameters
// Then we need to make a request to the api
// Then we need to display the results in this component

// we'll use a style object to lay out the toy cards
// const cardContainerLayout = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexFlow: 'row wrap'
// }

const ShowSupe = (props) => {
    const [supe, setSupe] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    // const [toyModalShow, setToyModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    // destructuring to get the id value from our route parameters
    const { id } = useParams()
    const navigate = useNavigate()
    // useNavigate returns a function
    // we can call that function to redirect the user wherever we want to

    const { user, msgAlert } = props
    console.log('user in props:', user)
    console.log('supe being shown:', supe)

    useEffect(() => {
        getOneSupe(id)
            .then(res => setSupe(res.data.supe))
            .catch(err => {
                navigate('/')
                // navigate back to home page if there's an error fetching
                msgAlert({
                    heading: 'Error getting supe',
                    message: messages.getSupeFailure,
                    variant: 'danger'
                })
            })
    }, [updated])

    // here, we'll declare a function that runs which will remove the supe
    // this function's promise chain should send a message, and then go somewhere
    // const removeTheSupe = () => {
    //     removeSupe(user, supe.id)
    //         // on success, send a success message
    //         .then(() => {
    //             msgAlert({
    //                 heading: 'Success',
    //                 message: messages.removeSupeSuccess,
    //                 variant: 'success'
    //             })
    //         })
    //         // then navigate to index
    //         .then(() => {
    //             navigate('/')
    //         })
    //         // on failure, send a failure message
    //         .catch(err => {
    //             navigate('/')
    //             // navigate back to home page if there's an error fetching
    //             msgAlert({
    //                 heading: 'Error removing supe',
    //                 message: messages.removeSupeFailure,
    //                 variant: 'danger'
    //             })
    //         })
    // }

    // let toyCards
    // if(supe) {
    //     if (supe.toys.length > 0) {
    //         toyCards = supe.toys.map(toy => (
    //             <ShowToy 
    //                 key={toy._id}
    //                 toy={toy}
    //                 supe={supe}
    //                 user={user}
    //                 msgAlert={msgAlert} 
    //                 triggerRefresh={() => setUpdated(prev => !prev)}
    //             />
    //         ))
    //     }
    // }

    if(!supe) {
        return <LoadingScreen />
    }

    return (
        <>
            <Container className='fluid'>
                <Card>
                    <Card.Header>
                        { supe.name }
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div>{ supe.description }</div>
                            
                            <div>{ supe.hero ? 'Hero' : 'Villain' }</div>
                            <div>Rating: { supe.rating }</div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {/* <Button 
                        onClick={() => setToyModalShow(true)} className="m-2"
                        variant='warning'>
                            Give {supe.name} a toy!
                        </Button> */}
                        {
                            supe.owner && user && supe.owner._id === user._id
                            ?
                            <>
                                
                                <Button onClick={() => setEditModalShow(true)} className="m-2" variant="warning">
                                    Edit Supe
                                </Button>
                                <Button onClick={() => {}} className="m-2" variant="danger">
                                    Remove Supe
                                </Button>
                            </>
                            :
                            null
                        }
                    </Card.Footer>
                </Card>
            </Container>

            {/* <Container style={cardContainerLayout}>
                {toyCards}
            </Container> */}
            
            {/* <EditSupeModal 
                user={user}
                supe={supe}
                show={editModalShow}
                updateSupe={updateSupe}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setEditModalShow(false)}
            />
            <NewToyModal
                supe={supe}
                show={toyModalShow}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setToyModalShow(false)}
            /> */}

        </>
    )
}

export default ShowSupe