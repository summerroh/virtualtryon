import Link from "next/link";
import blogPosts from "@/data/blog";

const Blog = () => {
  return (
    <>
      {blogPosts.slice(32, 35).map((post, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <article className="blog-meta-three mt-40 ">
            <figure className="post-img m0">
              <Link href={`/blog/${post.id}`} className="w-100 d-block">
                <img
                  src={post.imageSrc}
                  alt="blog"
                  className="lazy-img w-100 tran4s"
                  style={{}}
                />
              </Link>
            </figure>
            <div className="post-data mt-40 lg-mt-30">
              <div className="post-date opacity-75 text-uppercase">
                {post.date}
              </div>
              <Link href={`/blog/${post.id}`} className="mt-5 mb-35 lg-mb-20">
                <h4 className="tran3s blog-title fw-normal tx-dark">
                  {post.title}
                </h4>
              </Link>
              <Link
                href={`/blog/${post.id}`}
                className="read-btn fw-500 tran3s"
              >
                Read More
              </Link>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog;
