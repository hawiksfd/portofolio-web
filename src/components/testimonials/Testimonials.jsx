import './testimonials.scss'
import { data } from '../../dataTesti.js'

const Testimonials = () => {
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((datas) =>(
        <div className={datas.featured ? "card featured" : "card" } key={datas.id}>
          <div className="top">
            <img src="assets/right-arrow.png" className='left' alt="" />
            <img 
              className='user'
              src={datas.img}
              alt="" />
            <img src={datas.icon} className='right' alt="" />
          </div>
          <div className="center">
            <p>{datas.desc}</p>
          </div>
          <div className="bottom">
            <h3>{datas.name}</h3>
            <h4>{datas.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
