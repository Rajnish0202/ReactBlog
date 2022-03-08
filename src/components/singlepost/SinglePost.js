import "./singlepost.css";
import { Link } from "react-router-dom";

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          src='https://images.pexels.com/photos/9109274/pexels-photo-9109274.jpeg?cs=srgb&dl=pexels-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BD-9109274.jpg&fm=jpg'
          alt=''
          className='singlePostImg'
        />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet.
          <div className='singlePostEdit'>
            <i className='singlePostIcon fa-solid fa-pen-to-square'></i>
            <i className='singlePostIcon fa-solid fa-trash-can'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span>
            Author:
            <b className='singlePostAuthor'>
              <Link to='/posts?username=Jack' className='link'>
                Jack
              </Link>
            </b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea
          repellat saepe blanditiis amet doloremque, optio ratione ipsa!
          Consequatur, unde. A totam, numquam fuga sint ratione ea voluptate
          facilis maiores quisquam ut id at. Quis aut facilis atque, beatae
          aliquam delectus natus mollitia magnam asperiores! Consectetur quae,
          illo vel quia sapiente praesentium itaque facilis perferendis officia
          commodi cupiditate molestias, harum fugiat, labore nulla! Perferendis
          magni sequi ipsam quos. Hic nulla ab non numquam dolor corrupti sed
          recusandae blanditiis omnis quos!
        </p>
      </div>
    </div>
  );
}
