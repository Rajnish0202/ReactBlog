import "./singlepost.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import blogDB from "../../fireConfig";
import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";

export default function SinglePost({ curUser }) {
  const [singleData, setSingleData] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  // const [user, setUser] = useState({});

  const [posts, setPosts] = useState({
    title: "",
    author: "",
    file: "",
    category: "",
    story: "",
  });

  const { id, author, file, story, title } = singleData;
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const dataTemp = await getDoc(doc(blogDB, "blogger", params.postId));
      setSingleData({ ...dataTemp.data(), id: dataTemp.id });
    } catch (error) {
      console.log(error);
    }
  }

  // user
  // onAuthStateChanged(auth, (curUser) => {
  //   if (curUser) {
  //     const uid = curUser.uid;
  //     setUser(uid);
  //   } else {
  //     setUser("");
  //   }
  // });

  const deletePost = async (id) => {
    try {
      await deleteDoc(doc(blogDB, "blogger", id));
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  const editHandler = (singleData) => {
    setPosts(singleData);
    setShowEdit(true);
  };

  const updatePost = async () => {
    try {
      await setDoc(doc(blogDB, "blogger", posts.id), posts);
      setShowEdit(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='singlePost'>
      {singleData && (
        <div className='singlePostWrapper'>
          <img src={file} alt={title} className='singlePostImg' />
          <h1 className='singlePostTitle'>
            {title}
            {curUser && (
              <div className='singlePostEdit'>
                <i
                  className='singlePostIcon fa-solid fa-pen-to-square'
                  onClick={() => editHandler(singleData)}
                ></i>
                <i
                  className='singlePostIcon fa-solid fa-trash-can'
                  onClick={() => deletePost(id)}
                ></i>
              </div>
            )}
          </h1>
          <div className='singlePostInfo'>
            <span>
              Author:
              <b className='singlePostAuthor'>
                <Link to='/posts?username=Jack' className='link'>
                  {author}
                </Link>
              </b>
            </span>
            <span className='singlePostDate'>1 hour ago</span>
          </div>
          <p className='singlePostDesc'>{story}</p>
        </div>
      )}

      {/* Edit OverLay */}

      {showEdit && (
        <div className='editOverlay'>
          <div className='editFormGroup'>
            <div className='heading'>
              <p>Update Post</p>
            </div>
            <input
              type='text'
              placeholder='Image URL...'
              className='editInput'
              value={posts.file}
              onChange={(e) => setPosts({ ...posts, file: e.target.value })}
            />
            <input
              type='text'
              placeholder='Title...'
              className='editInput'
              value={posts.title}
              onChange={(e) => setPosts({ ...posts, title: e.target.value })}
            />
            <input
              type='text'
              placeholder='Author...'
              className='editInput'
              value={posts.author}
              onChange={(e) => setPosts({ ...posts, author: e.target.value })}
            />
            <input
              type='text'
              placeholder='Category'
              className='editInput'
              value={posts.category}
              onChange={(e) => setPosts({ ...posts, category: e.target.value })}
            />
            <textarea
              className='editInput textInput'
              placeholder='Your Story'
              value={posts.story}
              onChange={(e) => setPosts({ ...posts, story: e.target.value })}
            />
            <div className='btnContainer'>
              <button onClick={updatePost}>Edit</button>
              <button onClick={() => setShowEdit(false)}>Back</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
