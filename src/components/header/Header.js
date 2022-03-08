import React from "react";

import "./header.css";

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>ReactJs </span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
        src='https://images.pexels.com/photos/207247/pexels-photo-207247.jpeg?cs=srgb&dl=pexels-pixabay-207247.jpg&fm=jpg'
        alt=''
        className='headerImg'
      />
    </div>
  );
}
