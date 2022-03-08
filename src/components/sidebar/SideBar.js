import "./sidebar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>about me</span>
        <img
          src='https://images.pexels.com/photos/4329733/pexels-photo-4329733.jpeg?cs=srgb&dl=pexels-arthouse-studio-4329733.jpg&fm=jpg'
          alt=''
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa error
          sunt ab numquam maiores cumque delectus
        </p>
      </div>
      <div className='sidebarItem'>
        <div className='sidebarTitle'>categories</div>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <Link to='/posts ? cat=Life' className='link'>
              Life
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link to='/posts ? cat=Music' className='link'>
              Music
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link to='/posts ? cat=Sport' className='link'>
              Sport
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link to='/posts ? cat=Style' className='link'>
              Style
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link to='/posts ? cat=Tech' className='link'>
              Tech
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link to='/posts ? cat=Cinema' className='link'>
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <div className='sidebarTitle'>follow us</div>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fa-brands fa-facebook-square'></i>
          <i className='sidebarIcon fa-brands fa-twitter-square'></i>
          <i className='sidebarIcon fa-brands fa-pinterest'></i>
          <i className='sidebarIcon fa-brands fa-instagram-square'></i>
        </div>
      </div>
    </div>
  );
}
