import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Infrastructure Specialist</title>
        <meta property="og:title" content="Product Infrastructure Specialist" />
      </Helmet>
    </div>
  )
}

export default Home
