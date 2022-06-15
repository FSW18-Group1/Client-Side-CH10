import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import Image from 'next/image';
import scissors from "public/scissor.png";
import paper from "public/paper.png";
import rock from "public/rock.png";
import axios from 'axios';
import Link from 'next/link'
import { useCookies } from 'react-cookie';
import { authenticatedAction } from 'redux/actions/authenticated'

const Game_2 = () => {
  const [userChoice, setUserChoice] = useState(rock)
  const [computerChoice, setComputerChoice] = useState(scissors)
  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const choices = [rock, paper, scissors]
  const router = useRouter()

  const {token, data} = useSelector((state) => state.authenticatedReducer)
  
  const updateScore = (e) => {
    e.preventDefault()
    const url = 'https://challenge-chapter-9.herokuapp.com/games/1'
    const form = {
      id: data.id,
      points: result
    }
    axios.put(url, form)
    .then(res => {
        console.log(res)
        router.push('/gamepage')
    })
    .catch(
        err => {
          console.log(err)
          router.push('/gamepage')
        }
    )
  }

  const handleClick = (value) => {
    setUserChoice(value)    
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    setUserPoints(0);
    setComputerPoints(0);
    setTurnResult('')
    setGameOver(false)

  }

  useEffect(() => {
    document.title = 'Pingsut Ingame'
    if (userPoints <= 4 && computerPoints <= 4) {
        if (
            (userChoice === rock && computerChoice === scissors) ||
            (userChoice === paper && computerChoice === rock) ||
            (userChoice === scissors && computerChoice === paper)
        ) {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User gets the point!')
        if (updatedUserPoints === 5){
          setTurnResult('Player Wins!!')
          setResult(result+1)
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (
            (userChoice === paper && computerChoice === scissors) ||
            (userChoice === scissors && computerChoice === rock) ||
            (userChoice === rock && computerChoice === paper)
        ) {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer gets the point!')
        if (updatedComputerPoints === 5) {
          setTurnResult('Computer Wins!!')
          setResult(result-1)
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (userChoice === computerChoice) {
        setTurnResult('No one gets a point!')
      }
    }
  }, [computerChoice, userChoice])

  return (
    <>
    {!token && 
      <div className='section pt-4'>
        <h2 className='container'>you must <Link href={'/login'}><a>LOGIN</a></Link> first</h2>
      </div>
      }
    {token &&
    <div className="container">
      <h1 className='heading'>SUWIT</h1>
      <div className='d-flex justify-content-between'>
          <p>username: {data.username} </p>
          <p id="id">id: {data.id}  </p>
      </div>
      <div className='score'>
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>
      </div>

      <div className='choice justify-content-evenly'>
        <div className='choice-user user-hand'>
          <Image 
            width={150}
            height={150}
            src={userChoice} alt="ada gambar"
          />
        </div>
        <div className='choice-computer'>
          <Image 
             width={150}
             height={150}
            src={computerChoice} alt="ada gambar"
          />
        </div>
      </div>
      
      <div className='button-div'>
          <button className='button' onClick={() => handleClick(scissors)} disabled={gameOver}>
            scissor
          </button>
          <button className='button' onClick={() => handleClick(rock)} disabled={gameOver}>
            rock
          </button>
          <button className='button' onClick={() => handleClick(paper)} disabled={gameOver}>
            paper
          </button>
      </div>
      
      <div className='result'>
        <p className="winner">{turnResult}</p>
        <form onSubmit={updateScore}>
          <input className="form-control form-width" id="score" name="score" type='number' value= {result} disabled/>
            {gameOver && 
              <div className='d-flex flex-column '> 
                <div className="position-relative mt-2" style={{width:'100%'}}>
                  <button className="position-absolute top-0 start-50 translate-middle-x" style={{width:"fit-content"}} type="submit">submit</button>
                </div>
              </div>
            }
            {gameOver && 
              <p className='restart text-center' onClick={() => reset()}>Restart ?</p>
            }
        </form>
      </div>
    </div>
    }  
    </>
  )
}

export default Game_2
