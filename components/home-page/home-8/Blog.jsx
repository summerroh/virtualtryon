"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import blogPosts from "@/data/blog";

const Blog = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const openModal = (id) => {
    setVideoId(id);
    setOpen(true);
  };
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => {
          setVideoId("");
          setOpen(false);
        }}
      />
      {blogPosts.slice(27, 29).map((post, index) => (
        <div className="col-md-6 d-flex" key={index}>
          <article
            className="blog-meta-four tran3s mt-40"
            style={{ backgroundImage: post.image }}
            data-aos="fade-up"
            data-aos-delay={index * 100 + 100}
          >
            <div className="logo">
              <img src={post.logo} alt="logo" className="lazy-img" />
            </div>
            <div className="post-data mt-110 lg-mt-50">
              <div
                className="icon"
                onClick={() => openModal(post.videoId)}
                role="button"
              >
                <img src={post.icon} alt="logo" className="lazy-img" />
              </div>
              <Link href={`/blog/${post.id}`}>
                <h4 className="tran3s blog-title text-white mt-20 mb-55 lg-mb-30">
                  {post.title}
                </h4>
              </Link>
              <Link
                href={`/blog/${post.id}`}
                className="read-btn fw-500 text-white d-flex justify-content-between align-items-center"
              >
                <span>Continue Reading</span>
                <img src="/images/icon/icon_88.svg" alt="logo" />
              </Link>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};
export default Blog;
