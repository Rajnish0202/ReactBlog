import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
  return (
    <div className='post'>
      <img src={img} alt='' className='postImg' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>
            <Link to='/posts ? cat=Music' className='link'>
              Music
            </Link>
          </span>
          <span className='postCat'>
            <Link to='/posts ? cat=Life' className='link'>
              Life
            </Link>
          </span>
        </div>
        <span className='postTitle'>
          <Link to='/post/abc' className='link'>
            Lorem ipsum dolor sit amet.
          </Link>
        </span>

        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia rem,
        vel doloribus tempore at assumenda sit explicabo doloremque amet
        recusandae porro laboriosam vitae impedit ipsa fugit hic placeat
        similique quas animi delectus illum nam aut asperiores eius! Dolorum
        ipsam quam asperiores id cumque, rerum nemo accusamus tempore, quis enim
        a?
      </p>
    </div>
  );
}
