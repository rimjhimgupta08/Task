import React, { useState, useEffect } from 'react';
import './Style.css';



const Corasoul = () => {
      const imgs = [
            {
                  id: 1, img: "image/pic1.jpg"
            },
            {
                  id: 2, img: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZsMjA5MjExMDA2OTEtaW1hZ2Utam9iOTA2LnBuZw.png"
            },
            {

                  id: 3, img: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV80NV9waG90b19vZl9tb3VudGFpbl9pc2xhbmRfaXNvbGF0ZWRfb25fYV93aGl0ZV84NjQ4MTk5MC03YzNjLTQ0ZmQtOGNjNC00MmZkODdlNTJlZjZfMS5wbmc.png"
            },
            {
                  id: 4, img: "https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg"
            },
      ];
      
      const [sliderData, setSliderData] = useState(imgs[0]);
      const [currentIndex, setCurrentIndex] = useState(0);
      const handleClick = (index) => {
            const slider = imgs[index];
            setSliderData(slider);
            setCurrentIndex(index);
      }


      useEffect(() => {
            const interval = setInterval(() => {
                const nextIndex = (currentIndex + 1) % imgs.length;
                setSliderData(imgs[nextIndex]);
                setCurrentIndex(nextIndex);
            }, 3000); // Change slide every 3 seconds
    
            return () => clearInterval(interval);
            //eslint-disable-next-line
        }, [currentIndex, imgs.length]);


      return (
            <div className='slider' id='history'>
                  <img src={sliderData.img} alt="" width="100%" height="700px" className='slider1'  />
                  <div className="container slide-content">
                        <div className="test-top d-flex">
                              <h4 className='head'>01</h4>
                              <div className="box">
                                    <h4 className='history'>HISTORY</h4>
                                    <img src="image/Grey-Box.jpeg" alt="" width="20px" height="20px" />
                              </div>
                        </div>
                        <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quae soluta, quo eligendi laboriosam totam sunt voluptatibus quasi corporis voluptatem blanditiis! Cumque deleniti officia recusandae doloremque harum, earum ipsam error eveniet atque qui odit obcaecati nisi tenetur ipsa illo? Aliquid iste ducimus sapiente adipisci nobis repellat iusto quidem voluptate debitis!</p>
                        
                  </div>
                  <div className="image-indigator">
                  <div className="image-slide">
                        {
                              imgs.map((data, i) => (
                                    <img key={data.id} src={data.img} onClick={() => handleClick(i)} alt="" width="200" height="100"  className='slide-image'/>
                              ))
                        }
                        
                        
                  </div>
                  <div className="indicators" width="100%">
                {imgs.map((data, i) => (
                    <div key={data.id} className={`indicator ${sliderData.id === data.id ? 'active' : ''}`} onClick={() => handleClick(i)} width="40px" height="40px"></div>
                ))}
            </div>
            </div>
                  
            </div>
      )
}

export default Corasoul