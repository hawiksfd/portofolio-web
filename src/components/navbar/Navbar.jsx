import './navbar.scss'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
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
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)} >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
