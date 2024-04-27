import Link from "next/link";
import blogData from "@/data/blog";
import Image from "next/image";

const Blog = () => {
  return (
    <>
      {blogData.slice(6, 11).map((blog) => (
        <article
          className={`blog-meta-three mb-80 lg-mb-40 ${blog.className}`}
          key={blog.id}
          data-aos="fade-up"
          data-aos-delay={blog.delay}
        >
          {blog.imageSrc && (
            <figure className="post-img m0">
              <Link href={`/blog/${blog.id}`} className="w-100 d-block">
                <Image
                  width={800}
                  height={450}
                  src={blog.imageSrc}
                  alt="blog"
                  className="lazy-img w-100 tran4s"
                />
              </Link>
            </figure>
          )}
          <div className="post-data mt-40 lg-mt-30">
            <div className="post-date opacity-75 text-uppercase">
              {blog.date}
            </div>
            <Link href={`/blog/${blog.id}`} className="mt-10 mb-25 lg-mb-20">
              <h4 className="tran3s blog-title xl tx-dark">{blog.title}</h4>
            </Link>
            <div>
              <Link
                href={`/blog/${blog.id}`}
                className="read-btn-two fw-500 tran3s"
              >
                Read More
              </Link>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default Blog;
