import React, { useEffect, useState } from 'react'




function Deal() {
  const [timeLeft, setTimeLeft] = useState({
    days: 580,
    hours: 20,
    minutes: 44,
    seconds: 27,
  });

    useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
          return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="day-deals">
         <div className="header">
            <div>
         <h2>Day Of The <span className='daydeals-span'>Deal</span></h2>
         <p>Don’t wait. The time will never be just right.</p>
      </div>
        <div className="countdown">
          {timeLeft.days} Days {timeLeft.hours.toString().padStart(2, "0")}:
          {timeLeft.minutes.toString().padStart(2, "0")}:
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
         </div>
      
      <div className="deal-cards">
        {/* Card 1 */}
        <div className="deal-card">
          <span className="tag">NEW</span>
          <img src="1.jpg" alt="Mixed Fruits Chocolates" />
          <div className="info">
            <p className="category">Chocos</p>
            <h3>Mixed Fruits Chocolates Pack</h3>
            <div className='pricetag'>
                <p className="price">
                     $25 <span className="old">$30</span>
                 </p>
            <p className="quantity">1 Pack</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="deal-card">
          <span className="tag">HOT</span>
          <img src="2.jpeg" alt="Organic Apple Juice Pack" />
          <div className="info">
            <p className="category">Juice</p>
            <h3>Organic Apple Juice Pack</h3>
             <div className='pricetag'>
                <p className="price">$15 <span className="old1">100 ml</span></p>
    
                <p className="stock">3 left</p>
             </div>
           
          </div>
        </div>

        {/* Card 3 */}
        <div className="deal-card">
          <span className="tag">HOT</span>
          <img src="3.jpeg" alt="Mixed Almond Nuts Juice Pack" />
          <div className="info">
            <p className="category">Juice</p>
            <h3>Mixed Almond Nuts Juice Pack</h3>
            <div className='pricetag'>
                <p className="price">
                     $32 <span className="old">$39</span>
                 </p>
                <p className="quantity">250g</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="deal-card">
          <span className="tag">SALE</span>
          <img src="5.jpeg" alt="Fresh Mango Slice Juice" />
          <div className="info">
            <p className="category">Fruits</p>
            <h3>Fresh Mango Slice Juice</h3>
             <div className='pricetag'>
                <p className="price">$25</p>
                <p className="stock out">Out Of Stock</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deal