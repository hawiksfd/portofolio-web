import './portoList.scss'

const PortoList = ({id, title, active, setSelected}) => {
  return (
    <li className={active ? "portoList active" : "portoList"} 
    onClick={()=> setSelected(id)}>
        {title}
    </li>
  )
}

export default PortoList
