import React, { useEffect } from 'react'

import Homepic from './Homepic'

const Home = () => {
  return (
    <div>
  
      
      <div className="colorlib-intro">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="intro">It started with a simple idea: Create quality, well-designed products .</h1>
            </div>
          </div>
        </div>
      </div>
      <Homepic title='Best Sellers' />
      <div className="row">
					<div className="col-md-12 text-center">
						<p><a href="" className="btn btn-primary btn-lg">Shop All Products</a></p>
					</div>
				</div>
    </div>
  )
}

export default Home