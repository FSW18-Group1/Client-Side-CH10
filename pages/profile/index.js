import {Form, Button, Dropdown} from 'react-bootstrap'

export default function Profile() {
    return(
        <>        
            <div className="section">
                <Form className="container profile-form">
                    <div className='profile-picture'></div>
                    <h1 className="py-4">Edit Profile</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <div className="d-flex justify-content-start">
                        <button className="me-4 btn btn-danger">&laquo; back</button>
                        <Button variant="primary" type="submit">
                            Edit data
                        </Button>
                    </div>               
                    
                </Form>
            </div>
        </>
    )
}