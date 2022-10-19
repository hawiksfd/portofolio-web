import './portofolio.scss'
import PortoList from './PortoList';
import { useState } from 'react';

const Portofolio = () => {

  const [selected, setSelected] = useState('featured')
  const list = [
    {
      id: 'featured',
      title: 'Featured'
    },
    {
      id: 'web',
      title: 'Web Apps'
    },
    {
      id: 'mobile',
      title: 'Mobile Apps'
    }
  ]
  return (
    <div className='portofolio' id='portofolio'>
      <h1>Portofolio</h1>
      <ul>
        {list.map(item => (
          <PortoList 
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://www.softwareistic.com/assets/images/banking.png" alt="" />
          <h3>Banking Apps</h3>
        </div>
        <div className="item">
          <img src="https://www.softwareistic.com/assets/images/banking.png" alt="" />
          <h3>Banking Apps</h3>
        </div>
        <div className="item">
          <img src="https://www.softwareistic.com/assets/images/banking.png" alt="" />
          <h3>Banking Apps</h3>
        </div>
        <div className="item">
          <img src="https://www.softwareistic.com/assets/images/banking.png" alt="" />
          <h3>Banking Apps</h3>
        </div>
        <div className="item">
          <img src="https://www.softwareistic.com/assets/images/banking.png" alt="" />
          <h3>Banking Apps</h3>
        </div>
        <div className="item">
          <img src="https://www.softwareistic.com/assets/images/banking.png" alt="" />
          <h3>Banking Apps</h3>
        </div>
        <div className="item">
          <img src="https://www.softwareistic.com/assets/images/banking.png" alt="" />
          <h3>Banking Apps</h3>
        </div>
        <div className="item">
          <img src="https://www.softwareistic.com/assets/images/banking.png" alt="" />
          <h3>Banking Apps</h3>
        </div>
      </div>
    </div>
  )
}

export default Portofolio
