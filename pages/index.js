import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link'
import { useRouter } from 'next/router';
import Navbar from '../component/nav'
import Content from '../component/content'
import Footer from '../component/footer'
import SearchBar from '../component/search'
import DropMenu from '../component/dropMenu';
import { authenticatedAction } from '../redux/actions/authenticated'
import { getLeaderboard } from "../redux/actions/leaderBoard";


export default function Home() {
  const dispatch = useDispatch();
  const { token, data } = useSelector((state) => state.authenticatedReducer);
  const router = useRouter;

  useEffect(()=> {
      console.log('1. masuk useEffect')
      document.title = 'Home'
      dispatch(getLeaderboard())
      dispatch(authenticatedAction())
  }, [dispatch])

  return(
    <>
      <div className="section banner-bg">
        {token && 
          <div className='d-flex justify-content-between pt-4 mx-3 sticky'>
            <div className='d-flex justify-content-between nav-side' style={{paddingLeft:"5em"}}>
                <Link href='/'><a className='ahref'>Letitgo-game</a></Link>
                <p >| home</p>
            </div>
            <div className='search'>
                <SearchBar />
            </div>
            <div className='d-flex justify-content-between nav-side' style={{paddingRight:"2em"}}>
                <DropMenu user = {data} />
            </div>
          </div>
        }

        {!token && <Navbar />}
        <div className="banner">
          <h1 style={{ fontSize: "64px", letterSpacing: "3px" }}>
            Play Free HD Games <br /> And Many Videos
          </h1>
          <p>
            Enjoy your unlimited games and entertain post videos collection. We
            re the definitive source for the best curated games. playable on
            laptop, pc, wooden pc, anymore
          </p>
        </div>
      </div>
      <div className="section">
        <Content />
      </div>
      <div className="section">
        <Footer />
      </div>
    </>
  );
}

