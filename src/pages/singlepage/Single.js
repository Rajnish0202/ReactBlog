import "./single.css";

import Sidebar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlepost/SinglePost";

export default function Single({ curUser }) {
  return (
    <div className='single'>
      <SinglePost curUser={curUser} />
      <Sidebar />
    </div>
  );
}
