import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className='posts'>
      <Post img='https://images.pexels.com/photos/9365209/pexels-photo-9365209.jpeg?cs=srgb&dl=pexels-luis-ann-9365209.jpg&fm=jpg' />
      <Post img='https://images.pexels.com/photos/9443229/pexels-photo-9443229.jpeg?cs=srgb&dl=pexels-alexandre-weiss-9443229.jpg&fm=jpg' />
      <Post img='https://images.pexels.com/photos/7846313/pexels-photo-7846313.jpeg?cs=srgb&dl=pexels-marstion-7846313.jpg&fm=jpg' />
      <Post img='https://images.pexels.com/photos/2682877/pexels-photo-2682877.jpeg?cs=srgb&dl=pexels-dominika-roseclay-2682877.jpg&fm=jpg' />
      <Post img='https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?cs=srgb&dl=pexels-maksim-goncharenok-4352247.jpg&fm=jpg' />
      <Post img='https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?cs=srgb&dl=pexels-vincent-gerbouin-1174732.jpg&fm=jpg' />
    </div>
  );
}
