import Navbar from "../component/nav";
import Footer from "../component/footer"
import Submit from "../component/submit";
import NoSubmit from "../component/submitNo";


export default function SignUp() {
    return(
        <>        
        <div className="section banner-bg">
            <Navbar />
            <div className='container'>
                <div className="form-border mx-auto ">
                    <h1 className="text-center mt-5 fw-bold">Letitgo-games</h1>
                    <h3 className="text-center mb-5 fw-light">Create Account</h3>
                    <form method="post" > 
                        <div className="mb-4">
                            <input type="text" className="form-input" id="InputUsername" placeholder="Username" name='username' required />
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-input" id="InputEmail1" placeholder="Email" name="email" required />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-input" id="InputPassword" placeholder="Password" required />
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
                    <NoSubmit command="SIGN IN"  />
                </div>
            </div> 
        </div>
        <div className="section">
            <Footer />
        </div>
        </>
    )
}