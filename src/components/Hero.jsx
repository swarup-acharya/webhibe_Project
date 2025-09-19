import React, { useState } from "react";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li><a href="#">Home</a></li>

          <li className="dropdown">
            <a href="#">Categories ▾</a>
            <div className="mega-menu">
              <div className="mega-column">
                <h3>Classic</h3>
                <ul>
                  <li><a href="#">Left Sidebar 3 Column</a></li>
                  <li><a href="#">Left Sidebar 4 Column</a></li>
                  <li><a href="#">Right Sidebar 3 Column</a></li>
                  <li><a href="#">Right Sidebar 4 Column</a></li>
                  <li><a href="#">Full Width 4 Column</a></li>
                </ul>
              </div>
              <div className="mega-column">
                <h3>Banner</h3>
                <ul>
                  <li><a href="#">Left Sidebar 3 Column</a></li>
                  <li><a href="#">Left Sidebar 4 Column</a></li>
                  <li><a href="#">Right Sidebar 3 Column</a></li>
                  <li><a href="#">Right Sidebar 4 Column</a></li>
                  <li><a href="#">Full Width 4 Column</a></li>
                </ul>
              </div>
              <div className="mega-column">
                <h3>Columns</h3>
                <ul>
                  <li><a href="#">3 Columns Full Width</a></li>
                  <li><a href="#">4 Columns Full Width</a></li>
                  <li><a href="#">5 Columns Full Width</a></li>
                  <li><a href="#">6 Columns Full Width</a></li>
                  <li><a href="#">Banner 3 Columns</a></li>
                </ul>
              </div>
              <div className="mega-column">
                <h3>List</h3>
                <ul>
                  <li><a href="#">Shop Left Sidebar</a></li>
                  <li><a href="#">Shop Right Sidebar</a></li>
                  <li><a href="#">Banner Left Sidebar</a></li>
                  <li><a href="#">Banner Right Sidebar</a></li>
                  <li><a href="#">Full Width 2 Columns</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li className="dropdown">
            <a href="#">Products ▾</a>
            <div className="mega-menu">
              <div className="mega-column">
                <ul>
                  <li><a href="#">Product Page</a></li>
                  <li><a href="#">Product Accordion</a></li>
                  <li><a href="#">Product Full Width</a></li>
                  <li><a href="#">Accordion Full Width</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li className="dropdown">
            <a href="#">Pages ▾</a>
            <div className="mega-menu">
              <div className="mega-column">
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Cart</a></li>
                  <li><a href="#">Checkout</a></li>
                  <li><a href="#">Compare</a></li>
                  <li><a href="#">Faq</a></li>
                  <li><a href="#">Login</a></li>
                  <li><a href="#">Register</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li className="dropdown">
            <a href="#">Blog ▾</a>
            <div className="mega-menu">
              <div className="mega-column">
                <ul>
                  <li><a href="#">Left Sidebar</a></li>
                  <li><a href="#">Right Sidebar</a></li>
                  <li><a href="#">Full Width</a></li>
                  <li><a href="#">Details Left Sidebar</a></li>
                  <li><a href="#">Details Right Sidebar</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li><a href="#">Offers</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
