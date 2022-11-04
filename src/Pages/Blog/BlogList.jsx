import React from "react";
import ArtistInDemand from "./BlogListComponent/ArtistInDemand";
import Blogs from "./BlogListComponent/Blogs";
import NewsLatter from "./BlogListComponent/NewsLatter";


const BlogList = () => {
    return (
        <>
            <div class="banner-section blog-banner">
        <div class="container">
            <h2 class="banner-title">Wall Of Findmymua</h2>
        </div>
    </div>

    <div class="breadcrumb">
        <div class="container">
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="blog-list.html" class="active">Blog</a>
                </li>
            </ul>
        </div>
    </div>
    <Blogs />
    <ArtistInDemand />
    <NewsLatter />
        </>
    )
}

export default BlogList