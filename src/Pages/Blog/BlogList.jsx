import React from "react";
import ArtistInDemand from "./BlogListComponent/ArtistInDemand";
import Blogs from "./BlogListComponent/Blogs";
import NewsLatter from "./BlogListComponent/NewsLatter";


const BlogList = () => {
    return (
      <>
        <div className="banner-section blog-banner">
          <div className="container">
            <h2 className="banner-title">Wall Of Findmymua</h2>
          </div>
        </div>

        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="blog-list.html" className="active">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Blogs />
        <ArtistInDemand />
        <NewsLatter />
      </>
    );
}

export default BlogList