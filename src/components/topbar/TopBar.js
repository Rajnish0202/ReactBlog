import "./topbar.css";
import { Link } from "react-router-dom";

const TopBar = ({ curUser }) => {
  const logOut = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fa-brands fa-facebook-square'></i>
        <i className='topIcon fa-brands fa-twitter-square'></i>
        <i className='topIcon fa-brands fa-pinterest'></i>
        <i className='topIcon fa-brands fa-instagram-square'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to='/' className='link'>
              home
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/' className='link'>
              about
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/' className='link'>
              contact
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/write' className='link'>
              write
            </Link>
          </li>
          <li className='topListItem'>
            {curUser && (
              <Link to='/' className='link' onClick={logOut}>
                logout
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {curUser ? (
          <Link to='/settings'>
            <img
              className='topImg'
              src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg'
              alt=''
            />
          </Link>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                Login
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  );
};

export default TopBar;
