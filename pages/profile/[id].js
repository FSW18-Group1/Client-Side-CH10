import {Form, Button} from 'react-bootstrap'
import {useRouter} from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { authenticatedAction } from 'redux/actions/authenticated';
import { getProfilePlayer } from 'redux/actions/profileplayer';

export default function ProfilePlayer({user}) {
    const  dispatch = useDispatch();
    const {token} = useSelector((state) => state.authenticatedReducer)
    const router = useRouter()
    const id = router.query
    // console.log('id', id)
    const { getProfilePlayerEmail, getProfilePlayerUsername } = useSelector((state) => state.ProfilePlayerReducer)
    // console.log("get", getProfilePlayerEmail, getProfilePlayerUsername)

    useEffect(()=> {
        console.log(token)
        document.title='profile'
        dispatch(authenticatedAction())
        dispatch(getProfilePlayer(id))
      }, [])
    return(
        <>        
            <div className="section">
                <Form className="container profile-form">
                    <div className='profile-picture'></div>
                    <h1 className="py-4">Player Profile</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={getProfilePlayerEmail} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={getProfilePlayerUsername} disabled />
                    </Form.Group>              
                </Form>
            </div>
        </>
    )
}