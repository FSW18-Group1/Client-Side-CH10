import Navbar from "../component/nav";
import Footer from "../component/footer"
import Submit from "../component/submit";
import NoSubmit from "../component/submitNo";
import { useState, useEffect } from "react";
import {useDispatch} from "react-redux"
import { signupAction } from "../redux/actions/register";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("1 masuk handlesubmit");

        const urlRegister = 'https://challenge-chapter-9.herokuapp.com/register';
        const body = {
            username,
            email,
            password
        }
        axios.post(urlRegister, body)
            .then((res) => {
                console.log('masuk router.push ');
                router.push('/login')
            })
            .catch((err) => {
                console.log('3. gagal: '+ err.message)
            })

        dispatch(signupAction({
            username,
            email,
            password
        }))
    }

    useEffect(()=> {
        document.title = 'Signup'
    }, [])

    return(
        <>        
        <div className="section banner-bg">
            <Navbar />
            <div className='container'>
                <div className="form-border mx-auto ">
                    <h1 className="text-center mt-5 fw-bold">Letitgo-games</h1>
                    <h3 className="text-center mb-5 fw-light">Create Account</h3>
                    <form method="post" onSubmit={(e)=> handleSubmit(e)} > 
                        <div className="mb-4">
                            <input type="text" className="form-input" id="InputUsername" placeholder="Username" name='username' required value={username}  onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-input" id="InputEmail1" placeholder="Email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-input" id="InputPassword" placeholder="Password" required value={password}  onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-input" id="InputPassworConfirmation" placeholder="Password Confirmation" required />
                        </div>
                        {/* <button type="submit">create account</button> */}
                        <Submit command="CREATE ACCOUNT" />
                    </form>
                </div>
                <div className="form-bottom mx-auto py-2">
                    <p className="text-center py-2" style={{fontSize:'14px'}}>Already a member?</p>
                    <div onClick={() => router.push('/login')}><NoSubmit command="SIGN IN"  /></div>
                </div>
            </div> 
        </div>
        <div className="section">
            <Footer />
        </div>
        </>
    )
}