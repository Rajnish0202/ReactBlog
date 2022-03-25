import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ image, title, story, id, category }) {
  return (
    <div className='post'>
      <img src={image} alt={title} className='postImg' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>
            <Link to='/posts ? cat=Life' className='link'>
              {category}
            </Link>
          </span>
        </div>
        <span className='postTitle'>
          <Link to={`/post/${id}`} className='link'>
            {title}
          </Link>
        </span>

        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>{story}</p>
    </div>
  );
}
