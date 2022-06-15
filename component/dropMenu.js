import Link from 'next/link'
import { useRouter } from 'next/router';

export default function DropMenu(props) {
    const {user} = props
    const router = useRouter()
    const logout = () => {
        localStorage.clear()
        router.push('/login')
    }

    return(
        <div className="dropdown">
            <button className="profile"></button>
            <div className="dropdown-content">
                <div>
                    <p className='text-black text-center no-space'>{user.username}</p>
                    <p className='text-black text-center no-space mb-2'>{user.email}</p>
                </div>
                <div className='bottom-line'></div>
                <Link href={'/profile'}><a>setting</a></Link>
                <Link href={'#'}><a onClick={logout}>Logout</a></Link>
            </div>
        </div>
    )
}
