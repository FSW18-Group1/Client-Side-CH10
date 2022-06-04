import {Form, Button} from 'react-bootstrap'
import {useRouter} from 'next/router'

export default function ProfilePlayer() {
    const router = useRouter();
    const {id} = router.query;

    return(
        <>        
            <div className="section">
                <Form className="container profile-form">
                    <div className='profile-picture'></div>
                    <h1 className="py-4">Player Profile</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" disabled />
                    </Form.Group>              
                </Form>
            </div>
        </>
    )
}