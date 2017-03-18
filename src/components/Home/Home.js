import React, { Component } from 'react'
import { Link } from 'react-router'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>CSS Grids</h1>
        <div className="home-grid">
          <Link to='/Masonry'><div>Masonry I</div></Link>
          <Link to='/Responsive'><div>Responsive</div></Link>
          <Link to='/Fluid'><div>Fluid</div></Link>
          <Link to='/Overlapping'><div>Overlap I</div></Link>
          <Link to='/ExplicitlyPlaced'><div>Explicitly Placed</div></Link>
          <Link to='/NegativeSpace'><div>Negative Space</div></Link>

          <Link to='/Responsive'><div>Autoflow</div></Link>
          <Link to='/Masonry2'><div>Masonry II</div></Link>
          <Link to='/Responsive'><div>Masonry III</div></Link>
          <Link to='/Responsive'><div>Overlap II</div></Link>
          <Link to='/Responsive'><div>Packing</div></Link>
        </div>
      </div>
    )
  }
}

export default Home