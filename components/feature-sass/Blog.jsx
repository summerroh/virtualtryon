import Image from "next/image";
import React from "react";
import blogData from "@/data/blog";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      {blogData.slice(35, 38).map((blog) => (
        <div key={blog.id} className="col-lg-4 col-md-6 d-flex">
          <article
            className="blog-meta-seven mb-40"
            data-aos="fade-up"
            data-aos-delay={blog.delay}
          >
            <figure className="post-img m0">
              <Link href={`/blog/${blog.id}`} className="w-100 d-block">
                <Image
                  width={339}
                  height={243}
                  src={blog.imgSrc}
                  alt="blog"
                  className="lazy-img w-100 tran4s"
                />
              </Link>
            </figure>
            <div className="post-data mt-30 lg-mt-20">
              <div className="post-tag text-uppercase">{blog.tag}</div>
              <Link href={`/blog/${blog.id}`} className="mt-10 mb-15">
                <h4 className="tran3s blog-title tx-dark">{blog.title}</h4>
              </Link>
              <div>
                <Link
                  href={`/blog/${blog.id}`}
                  className="read-btn fw-500 tran3s d-flex align-items-center justify-content-between"
                >
                  <span>Read Story</span>
                  <span>
                    <i className="bi bi-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog;
