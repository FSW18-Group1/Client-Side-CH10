import Navbar from '../component/nav'
import Content from '../component/content'
import Footer from '../component/footer'
// import style from '../styles/pages.css'

export default function Home() {
  return(
    <>        
    <div className="section banner-bg">
        <Navbar />
        <div className="banner">
            <h1 style={{fontSize:'64px', letterSpacing: "3px"}}>Play Free HD Games <br/> And Many Videos</h1>
            <p>Enjoy your unlimited games and entertain post videos collection. We re the definitive source for the best curated games. playable on laptop, pc, wooden pc, anymore</p>
        </div>
    </div>
    <div className="section">
        <Content />
    </div>
    <div className="section">
        <Footer />
    </div>
    </>
)
}
