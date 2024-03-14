import React, { useState } from 'react';
import './Style.css';


const Slider = () => {
  const images = [
    'image/pic2.jpg',
    'image/img1.webp',
    
  ];
  
  

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
      <>
      <div className="team container">
      <div className="test-top d-flex">
          <h4 className='head'>02</h4>
          <div className="box">
            <h4 className='history'>TEAM</h4>
            <img src="image/Grey-Box.jpeg" alt="" width="20px" height="20px" />
          </div>
          <p className='para'>Cras scelesque id quam sed dignissim Pellentesque urna nunc. Gravida Quis hendrerit ac. Tristique quam. Vivamus suscipit dignissim tortor nec congue.</p> 
        </div>
        
      </div>
    <div className="slider-container" id="team"> 

    
      <div className="button">
      <button className="prev-button" onClick={handlePrev}>
      MOUNTAIN 1
        
      </button>
      <button className="next-button" onClick={handleNext}>
      MOUNTAIN 2
      </button>
      </div>
      <div className="image-container">
        <img  src={images[currentImageIndex]} alt={` ${currentImageIndex + 1}`} className="slider-image"/>
      </div>
      
      <div className="cart-slide">
        <h4 className='history fw-bold'>SCHEDULE</h4>
        <div className="cart d-flex">
          <div className="left">
        
            <div className="paras">
            
              <p>25 Nov 2016 <span>Vestibulum viverra</span></p>
              <p>25 Nov 2016 <span>Vestibulum viverra</span></p>
            </div>


            <p>25 Nov 2016 <span>Vestibulum viverra</span></p>

            <p>25 Nov 2016 <span>Vestibulum viverra</span></p>

          </div>

        </div>
      </div>
      <div className="bottom d-flex justify-content-evenly align-items-center flex-wrap p-2">
      <div className="left d-flex align-items-center">
          <img className="img rounded-circle" src="image/pic1.jpg" alt="" width="40px" height="40px" />
          <div className="content ms-2 mt-2">
            <h4>LOSANGELES</h4>
            <h4>MOUNTAIN</h4>
          </div>
          </div>
          <div className="right text-center mt-3">
            <p className='copy'>COPYRIGHT 2016. ALL RIGHT RESERVED</p>
          </div>
      </div>
    </div>
    
    </>
  );
};

export default Slider;
