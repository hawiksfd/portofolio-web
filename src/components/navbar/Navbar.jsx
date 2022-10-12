import './navbar.scss'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <a href='#header' className='logo'>.HAWIKSFD</a>
          <div className="itemContainer">
            <ContactMailIcon className='icon'/>
            <a href='#contact' className='title'>mohhawik17@gmail.com</a>
          </div>
          <div className="itemContainer">
            <GitHubIcon className='icon'/>
            <a href='https://github.com/hawiksfd' target="_blank" className='title' rel="noreferrer">hawiksfd</a>
          </div>
        </div>
        <div className="right">
          kanan
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
