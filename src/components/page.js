import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Page = () => {
  return (
    <div className="home">
      <div className="parallax">
        <div className="parallax-group">
          <div className="layer layer-1"></div>
          <div className="layer layer-2"></div>
          <div className="layer layer-3"></div>
          <div className="layer layer-4"></div>
          <div className="layer layer-5"></div>
          <div className="layer layer-6"></div>

          <div className="content">
            <h1>Welcome to the AWS Challenge</h1>
            <p>Explore our exciting challenges and our results!</p>
            <Link to="/procedure" className="cta-button">View Process</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page