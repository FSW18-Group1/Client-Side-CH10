import poster from '../../public/paperockscissor.jpg'
import Table from 'react-bootstrap/Table'
import Image from 'next/image';


function GameDetail() {
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
                <button className="me-4 btn btn-danger">&laquo; back</button>
                <button className="ms-2 px-4 btn btn-primary">play</button>
              </div>
            </div>
          </div>
            <div className="mx-auto" style={{width:'500px'}}>
                <h2 className='text-center mb-4'>Leader Board</h2>
            <Table striped bordered hover className='leaderboard'>
                <thead>
                    <tr>
                        <th className='text-white'>Rank</th>
                        <th className='text-white'>Username</th>
                        <th className='text-white'>Score</th>
                    </tr>
                </thead>
                <tbody>
                  {/* {user.map((player) =>{
                      return(
                        <tr key={player.id}>
                          <td className='text-white'>{count++}</td>
                          <td className='text-white'><Link to={`playerprofile/${player.id}`}>{player.username}</Link></td>
                          <td className='text-white'>{player.score}</td>
                        </tr>
                      )
                    })} */}
                </tbody>
            </Table>
            </div>
      </div>
    </div>
  );
}

export default GameDetail;