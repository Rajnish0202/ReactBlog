import SideBar from "../../components/sidebar/SideBar";
import "./settings.css";

export default function Settings({ curUser }) {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img
              src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg'
              alt=''
            />
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon fa-regular fa-circle-user'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type='text' placeholder='Jack' />
          <label>Email</label>
          <input type='email' placeholder='jack@gmail.com' />
          <label>Password</label>
          <input type='password' />
          <button className='settingsSubmit' type='submit'>
            Update
          </button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
