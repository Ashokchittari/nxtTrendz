import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-main-container">
          <div className="main-heading-container">
            <h1 className="main-heading">
              Clothes That Get
              <br /> YOU Noticed
            </h1>
            <p className="home-para">
              Fashion is part of the daily air Image URLs Colors Font-families
              Things to Keep in Mind All components you implement should go in
              the src/components directory. Dont change the component folder
              names as those are the files being imported into the tests. Do not
              remove the pre-filled code Want to quickly review some of the
              concepts you’ve been learning? Take a look at the Cheat Sheets.
            </p>
            <button type="button" className="shop-btn">
              Shop Now
            </button>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="main-image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
