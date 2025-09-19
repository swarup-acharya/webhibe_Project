import React from 'react'



function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">BlueBerry</div>
        <input type="text" placeholder='Search Product' /> 
        <button className='btn'><span style={{fontSize:15}}>Account</span> <br />Login
            </button>   
        <button className='btn'>WishList</button>   
        <button className='btn'>Cart</button>   
      </div>
    </nav>
  );
}

export default Navbar;


