import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import blogDB from "../../fireConfig";
import "./write.css";

export default function Write() {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  async function addblog(event) {
    event.preventDefault();
    await addDoc(collection(blogDB, "blogger"), {
      title: title,
      story: story,
      file: file,
      author: author,
      category: category,
    });
    window.location.href = "/";
  }

  return (
    <div className='write'>
      {file.length === 0 ? (
        <div className='uploadBox'>
          <img
            className='upload'
            src='https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXBsb2FkJTIwaW1hZ2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt=''
          />
        </div>
      ) : (
        <img src={file} alt={title} className='writeImg' />
      )}

      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fa-solid fa-plus'></i>
          </label>
          <input
            type='text'
            className='imageUrl'
            placeholder='Image URL...'
            onChange={(e) => setFile(e.target.value)}
          />
          <input
            type='text'
            className='author'
            placeholder='Author...'
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type='text'
            className='author'
            placeholder='Category...'
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            className='writeText writeInput'
            autoFocus={true}
            placeholder='Tell your story'
            type='text'
            onChange={(e) => setStory(e.target.value)}
          />
        </div>
        <button className='writeSubmit' onClick={addblog}>
          Publish
        </button>
      </form>
    </div>
  );
}
