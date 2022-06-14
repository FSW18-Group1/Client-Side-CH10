import {Form, Button} from 'react-bootstrap'
import {useRouter} from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { authenticatedAction } from '../../redux/actions/authenticated';
import axios from 'axios'
import useSWR from 'swr'

// export async function getServerSideProps() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
//     const data = await res.json();
//     return{
//         props: {
//             user: data.username
//         }
//     }
// }

export default function ProfilePlayer({user}) {
    const  dispatch = useDispatch();
    const {token} = useSelector((state) => state.authenticatedReducer)
    const router = useRouter();
    const {id} = router.query;
    const config = {
        headers: { Authorization: `Bearer ${token}`}
    }
    const fetcher = url => axios.get('https://challenge-chapter-9.herokuapp.com/profile/13',config).then(res => res.data)
    const {data, error} = useSWR('/api/data', fetcher)


    useEffect(()=> {
        console.log(token)
        document.title='profile'
        dispatch(authenticatedAction())

      }, [dispatch])
    return(
        <>        
            <div className="section">
                <Form className="container profile-form">
                    <div className='profile-picture'></div>
                    <h1 className="py-4">Player Profile</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"  disabled />
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

