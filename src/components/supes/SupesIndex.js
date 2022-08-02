import { useState, useEffect } from 'react'
// SupesIndex should make a request to the api
// To get all supes
// Then display them when it gets them

// STUFF FROM ELSEWHERE
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'

// STUFF FROM MY OWN CODE
import { getAllSupes } from '../../api/supes'
import LoadingScreen from '../shared/LoadingScreen'

// style for our card container
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const SupesIndex = (props) => {

    const [supes, setSupes] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    
    useEffect(() => {
        // console.log('use effect works')
        console.log(props)
        getAllSupes()
            .then(res => setSupes(res.data.supes))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting Supes',
                    message: messages.getSupesFailure,
                    variant: 'danger'
                })
                setError(true)
            })
    }, [])
    
    if(error) return <p>Error</p>;

    // if supes haven't been loaded yet, show a loading message
    if(!supes) {
        return <LoadingScreen />
    } else if (supes.length === 0) {
        return <p>No supes yet. Better add some.</p>
    }

    const supeCards = supes.map(supe => 
        <Card style={{width: '30%', margin: 5}} key={supe._id}>
            <Card.Header>{ supe.name }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/supes/${supe._id}`}>View { supe.name }</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    )

    return (
        <div style={cardContainerStyle}>
            {supeCards}
        </div>    
    )
}

export default SupesIndex