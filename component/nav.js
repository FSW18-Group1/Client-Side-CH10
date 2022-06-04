import Link from 'next/link'
import Search from './search'
// import style from './component.module.css';


export default function Navbar() {

    return(
        <div className='d-flex justify-content-between pt-4 mx-3 sticky'>
            <div className='d-flex justify-content-between nav-side' style={{paddingLeft:"5em"}}>
                <Link href={'/'}><a className='ahref'>Letitgo.games</a></Link>
                <p >| home</p>
            </div>
            <div className='style.search'>
                <Search />
            </div>
            <div className='d-flex justify-content-between nav-side' style={{paddingRight:"2em"}}>
                <>
                    <Link href={'/login'}><a className='ahref'>SIGN IN</a></Link> 
                    <Link href={'/signup'}><a className='ahref'>CREATE ACCOUNT</a></Link> 
                </>   
            </div>
        </div>
    )
}