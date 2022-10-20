import './portofolio.scss'
import PortoList from './PortoList';
import { useState, useEffect } from 'react';
import { featuredPorto, webPorto, mobilePorto } from '../../dataPorto.js'

const Portofolio = () => {

  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
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
  ];

  useEffect(()=>{
    switch(selected){
      case 'featured' :
        setData(featuredPorto);
        break;
      case 'web' :
        setData(webPorto);
        break;
      case 'mobile' :
        setData(mobilePorto);
        break;
      default :
        setData(featuredPorto);
    }
  },[selected])

  return (
    <div className='portofolio' id='portofolio'>
      <h1>Portofolio</h1>
      <ul>
        {list.map((item) => (
          <PortoList 
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((datas) => (
          <div className="item" key={datas.id} >
            <img src={datas.img} alt="" />
            <h3>{datas.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portofolio
