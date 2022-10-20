import './works.scss'
import { data } from "../../dataWorks.js";
import { useState } from 'react';

const Works = () => {

  const [slider, setSlider] = useState(0);

  const handleClick = (way) => {
    way === 'left' 
    ? setSlider( slider > 0 ? slider - 1 : data.length - 1 )
    : setSlider( slider < data.length - 1 ? slider + 1 : 0 )
  }

  return (
    <div className='works' id='works'>      
      <div 
        className="slider" 
        style={{ transform:`translateX(-${slider * 100}vw)` }}
      >
        {data.map((datas) =>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={datas.icon} alt="" />
                  </div>
                  <h2>{datas.title}</h2>
                  <p>{datas.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={datas.img}
                  alt=""
                />
              </div>
            </div>
          </div>
      ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt='' onClick={()=> handleClick('left')} />
      <img src="assets/arrow.png" className="arrow right" alt='' onClick={()=> handleClick('right')}/>
    </div>
  )
}

export default Works
