import poster from '../../public/paperockscissor.jpg'
import Table from 'react-bootstrap/Table'
import Image from 'next/image';
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeaderboard } from "../../redux/actions/leaderBoard";
import Link from 'next/link'


function GameDetail() {
  const {getLeaderboardResult, getLeaderboardLoading,getLeaderboardError} = useSelector((state) => state.leaderboardReducer)
  const [user, setUser] = useState(getLeaderboardResult)
  const dispatch = useDispatch();
  const count = 1

  console.log(getLeaderboardLoading)
  console.log(user)
  console.log(getLeaderboardError)

  useEffect(()=> {
    console.log('1.useEffet getleaderboard')
    document.title='gamepage pingsut'
    dispatch(getLeaderboard())
  }, [dispatch])

  return (
    <div className="section">
      <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-7">
              <Image 
                height={497}
                width={746}
                src={poster} alt="ada gambar"
              />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">This is games for kid</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="d-flex justify-content-start">
                <Link href='/'>
                  <button className="me-4 btn btn-danger">
                    <a className='ahref'>&laquo; back</a>
                  </button>
                </Link>
                <Link href='/'>
                  <button className="ms-2 px-4 btn btn-primary">
                    <a className='ahref'>play</a>
                  </button>
                </Link>
              </div>
            </div>
          </div>
            <div className="mx-auto" style={{width:'500px'}}>
              <h2 className='text-center mb-4'>Leader Board</h2>
              {getLeaderboardLoading && 
                <h4>loading...</h4>
              }
              {!user && 
                <h4 className="text-center">No data</h4>
              }
              {user &&
              <Table striped bordered hover className='leaderboard'>
                  <thead>
                      <tr>
                          <th className='text-white'>Rank</th>
                          <th className='text-white'>Username</th>
                          <th className='text-white'>Score</th>
                      </tr>
                  </thead>
                  <tbody>
                    {user.map((player) =>{
                        return(
                          <tr key={player.id}>
                            <td className='text-white'>{count++}</td>
                            <Link href={`/profile/${player.id}`}>
                              <td><a className='text-white ahref'>{player.username}</a></td>
                            </Link>
                            <td className='text-white'>{player.score}</td>
                          </tr>
                        )
                      })}
                  </tbody>
              </Table>
              }
            </div>
      </div>
    </div>
  );
}

export default GameDetail;