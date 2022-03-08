import './write.css';

export default function Write() {
  return (
    <div className='write'>
      <img
        src='https://images.pexels.com/photos/9109274/pexels-photo-9109274.jpeg?cs=srgb&dl=pexels-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BD-9109274.jpg&fm=jpg'
        alt=''
        className='writeImg'
      />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fa-solid fa-plus'></i>
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            className='writeText writeInput'
            autoFocus={true}
            placeholder='Tell your story'
            type='text'
          ></textarea>
        </div>
        <button type='submit' className='writeSubmit'>
          Publish
        </button>
      </form>
    </div>
  );
}
