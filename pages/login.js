import Navbar from "../component/nav";
import Footer from "../component/footer"
import Submit from "../component/submit";
import NoSubmit from "../component/submitNo";

export default function Login() {
    return(
        <>        
        <div className="section banner-bg">
            <Navbar />
            <div className='container ' >
                <div className="form-border mx-auto ">
                    <h1 className="text-center mt-5 fw-bold">Letitgo-games</h1>
                    <h3 className="text-center mb-5 fw-light">Sign In</h3>
                    <form > 
                        <div className="mb-4">
                            <input type="text" className="form-input" id="InputEmail1" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-input" id="InputEmail1" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-input" id="InputPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <Submit command="SIGN IN" />
                    </form>
                    {/* <NoSubmit command="FORGET PASSWORD ?" /> */}
                </div>
                <div className="form-bottom mx-auto py-2">
                    <p className="text-center py-2" style={{fontSize:'14px'}}>New to Wuci.co?</p>
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