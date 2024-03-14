import './App.css';
import Corasoul from './components/Corasoul';
import Slider from './components/Slider';


function App() {
  return (
    <>
      <div className='hero' style={{ backgroundImage: `url("image/pic1.jpg")`, backgroundPosition: "cover", backgroundRepeat: "no-repeat" }}>
      <img className="img rounded-circle mt-2" src="image/pic1.jpg" alt="" width="40px" height="40px" />
        <ul className='d-flex mt-2'>
          <li className='me-4'><a className='text-light' href="#history">01. HISTORY</a></li>
          <li><a className='text-light' href="#team">02. TEAM</a></li>
        </ul>
        <div className="center ">
          <h1 className='text-dark'>LOSANGELES</h1>
          <h1 className='text'>MOUNTAIN</h1>
        </div>
      </div>
      <div className="heading container">
          <div className="left">
          <img className="img" src="image/pic1.jpg" alt="" />
          <div className="content ms-2 mt-2">
            <h4>LOSANGELES</h4>
            <h4 style={{color:"rgba(26, 57, 167, 0.955)"}}>MOUNTAIN</h4>
          </div>

          </div>
          <div className="right d-flex">
          <li><a className='text-dark' href="#history">01. HISTORY</a></li>
            <li><a className='text-dark' href="#team">02. TEAM</a></li>
          </div>
        </div>

      <Corasoul />
      <Slider />

    </>

  );
}

export default App;
