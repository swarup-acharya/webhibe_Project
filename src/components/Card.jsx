import React from 'react'

function Card() {
  return (
    <div>
    <div className="promo-section">
      {/* Left Card */}
      <div className="promo-card">
        <img
          src="7.png"
          alt="Snack & Fast Food"
          className="promo-img"
        />
        <div className="promo-info">
          <h3>Tasty <span className='snack'>Snack</span> <br/>& Fast food</h3>
          <p>The flavour of something special</p>
          <button className="promo-btn">Shop Now</button>
        </div>
      </div>

      {/* Right Card */}
      <div className="promo-card pink">
        <img
          src="8.png"
          alt="Fruits & Vegetables"
          className="promo-img"
        />
        <div className="promo-info">
          <h3>Fresh Fruits <br/>& Vegetables</h3>
          <p>A healthy meal for every one</p>
          <button className="promo-btn">Shop Now</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card