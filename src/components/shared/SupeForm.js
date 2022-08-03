import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap'


const SupeForm = (props) => {
    const { supe, handleChange, heading, handleSubmit } = props
    return (
      <>
        <Container className='justify-content-center' style={{color:'white', textShadow: '3px 3px 3px black', marginTop: '20px'}}>
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            placeholder="Enter supe's name here"
                            value={ supe.name }
                            name='name'
                            type='text'
                            onChange={ handleChange } />
                            
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control 
                            placeholder="Supe's rating (1 to 100)"
                            value={ supe.rating }
                            name="rating"
                            type="number"
                            min="1"
                            max="100"
                            onChange={ handleChange } />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            placeholder="Enter supe's description"
                            value={ supe.description }
                            name="description"
                            type="text"
                            onChange={ handleChange } />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Check name='hero' type="checkbox" defaultChecked={ supe.hero }label="Is this supe a hero?" 
                        onChange={ handleChange }/>
                    </Form.Group>
                </Row>

                <Button variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
      </>
    );
}

export default SupeForm