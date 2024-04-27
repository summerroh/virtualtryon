import Link from "next/link";
import blogData from "@/data/blog";

const Blog = () => {
  return (
    <>
      {blogData.slice(29, 32).map((blog, index) => (
        <div
          key={index}
          className={`col-lg-4 col-sm-6 d-flex`}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <article className="blog-meta-one tran3s mt-30">
            <figure className="post-img m0">
              <Link href={`/blog/${blog.id}`} className="w-100 d-block">
                <img
                  src={blog.imageSrc}
                  alt="icon"
                  className="lazy-img w-100 tran4s"
                />
              </Link>
            </figure>
            <div className="post-data mt-25">
              <a
                href="#"
                className="post-tag fw-500 tx-dark text-uppercase mb-20"
                style={{ backgroundColor: `${blog.tagBgColor}` }}
              >
                {blog.tag}
              </a>
              <Link href={`/blog/${blog.id}`} className="blog-title d-block">
                <h4 className="tran3s">{blog.title}</h4>
              </Link>
              <Link href={`/blog/${blog.id}`} className="read-btn mt-35">
                <img
                  src="/images/icon/icon_12.svg"
                  alt="icon"
                  className="lazy-img"
                />
              </Link>
            </div>
            {/* /.post-data */}
          </article>
          {/* /.blog-meta-one */}
        </div>
      ))}
    </>
  );
};

export default Blog;
