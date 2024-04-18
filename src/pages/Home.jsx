import React from 'react'
import Main from '../components/Main'
import Row  from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
        <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowID='3' title='Top Rated' fetchURL={requests.requestTopRated} />
        
        <Row rowID='5' title='Now Playing' fetchURL={requests.requestNowPlaying} />
    </>
  )
}

export default Home
