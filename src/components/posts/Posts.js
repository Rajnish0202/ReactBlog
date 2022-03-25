import { useState } from "react";
import Post from "../post/Post";
import "./posts.css";

export default function Posts({ data }) {
  const [filter, setFilter] = useState("");
  // console.log(data);
  return (
    <div className='posts'>
      {data
        .filter((obj) => obj.category.toLowerCase().includes(filter))
        .map((item) => {
          const { title, file, story, id, category } = item;
          return (
            <Post
              key={id}
              title={title}
              image={file}
              story={story}
              id={id}
              category={category}
            />
          );
        })}
    </div>
  );
}
