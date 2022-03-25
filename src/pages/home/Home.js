import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";

export default function Home({ data }) {
  // console.log(data);
  return (
    <>
      <Header />
      <div className='home'>
        <Posts data={data} />
        <SideBar />
      </div>
    </>
  );
}
