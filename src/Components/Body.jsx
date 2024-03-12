import React from 'react'
import './Body.css'
import Header from './Header'
import Blob from '../assets/blob-haikei.png'
import Blob2 from '../assets/blob.png'
import Food1 from '../assets/food2.png'
import Food2 from '../assets/DALAS-ASUN-removebg-preview.png'
import Food3 from '../assets/food3.png'
import Food4 from '../assets/food4.png'
import Chili from '../assets/chili.png'
import Chicken from '../assets/chicken.png'
import MostPopularFood from './MostPopularFood'

function Body() {
  return (
    <>
    <Header/>
      <section id='home' className="body-container">
      <div className="food">
        <div className="column">
        <p>@BloomandSpiceRestaurant</p>
        <h2>We Serve</h2>
        <h2>Delicious <span>Food</span></h2>
        <p className='tagline'>Deliciousness you can't resist!</p>
        <button className="started">Get Started</button>
        </div>
            <div className="images">
          <img className='blob' src={Blob} alt="" />
          <img className='food1'src={Food1} alt="" />
          <img className='food2' src={Food2} alt="" />
          <img className='food3' src={Food3} alt="" />
          <img className='food4' src={Food4} alt="" />
          </div>
          </div>
      </section>

      <section id='about' className="About-container">
        <div className="img">
            <img className='image' src={Blob2} alt="" />
            <img className='image1' src={Chili} alt="" />
            <img className='image2' src={Chicken} alt="" />
            <button className='View-more'>View more</button>
            <div className="text">
                <h2>About <span>Us</span></h2>
                <p>At Bloom and Spice Restaurant + Grills, we provide continental dishes, soups, grills. 
<br />
You can have them in party packs, lunch packs, bowls, coolers, trays and for events.
<br />
We also prepare food packages for special celebrations - to gift someone, etc.
<br />
We also make special sauces and stew on request.
</p>
        </div>
        </div>
      </section>

      <section className="Most-popular-food">
        <MostPopularFood/>
      </section>
    </>
  )
}

export default Body
