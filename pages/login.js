import Navbar from "../component/nav";
import Footer from "../component/footer"
import Submit from "../component/submit";
import NoSubmit from "../component/submitNo";
import { loginAction } from "../redux/actions/register";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [cookies, setCookie] = useCookies(['token'])
    // const {loginResult} = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("1 masuk handlesubmit");

        const urlLogin = 'https://challenge-chapter-9.herokuapp.com/login';
        const bodyLogin = {
            username,
            email,
            password
        }
        axios.post(urlLogin, bodyLogin)
            .then((res) => {
                console.log('3. berhasil: '+ res.data);
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('data', JSON.stringify(res.data.data)) 
                router.push('/')
            })
            .catch((err) => {
                console.log('3. gagal: '+ err.message)
            })

        dispatch(loginAction({
            username,
            email,
            password
        }))
    }

    useEffect(()=> {
        document.title = 'Login'
    }, [])

    return(
        <>        
        <div className="section banner-bg">
            <Navbar />
            <div className='container ' >
                <div className="form-border mx-auto ">
                    <h1 className="text-center mt-5 fw-bold">Letitgo-games</h1>
                    <h3 className="text-center mb-5 fw-light">Sign In</h3>
                    <form onSubmit={(e)=> handleSubmit(e)}> 
                        <div className="mb-4">
                            <input type="text" className="form-input" id="InputEmail1" placeholder="Username" value={username}  onChange={(e) => setUsername(e.target.value)} required  />
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-input" id="InputEmail1" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required  />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-input" id="InputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <Submit command="SIGN IN" />
                    </form>
                    {/* <NoSubmit command="FORGET PASSWORD ?" /> */}
                </div>
                <div className="form-bottom mx-auto py-2">
                    <p className="text-center py-2" style={{fontSize:'14px'}}>New to Letitgo-games?</p>
                    <NoSubmit command="CREATE AN ACCOUNT"  />
                </div>
            </div> 
        </div>
        <div className="section">
            <Footer />
        </div>
        </>
    )
}