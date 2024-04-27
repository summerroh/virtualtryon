import Link from "next/link";
import posts from "@/data/blog";

const Blog = () => {
  return (
    <>
      {posts.slice(19, 21).map((post) => (
        <div
          className="col-md-6 d-flex"
          key={post.id}
          data-aos="fade-up"
          data-aos-delay={post.delay}
        >
          <article
            className="blog-meta-five d-flex flex-column position-relative tran3s mb-60 lg-mb-50"
            data-aos="fade-up"
            id={`post-${post.id}`}
          >
            <div>
              <Link
                href={`/blog/${post.id}`}
                className="tag text-uppercase fw-500 tran3s"
              >
                {post.tag}
              </Link>
            </div>
            <div className="post-data mt-30 mb-100 lg-mb-50">
              <Link href={`/blog/${post.id}`}>
                <h4 className="tran3s blog-title">{post.title}</h4>
              </Link>
            </div>
            <div className="blog-footer d-flex align-items-center justify-content-between mt-auto">
              <div className="blog-date fw-500 tx-dark">
                {post.tag === "Design" ? "Featured -" : "Created on -"}
                <a href="#" className="fw-normal tran3s">
                  {post.date}
                </a>
              </div>
              <Link href={`/blog/${post.id}`} className="read-more tran3s">
                <i className="bi bi-arrow-up-right" />
              </Link>
            </div>
            {/* /.blog-footer */}
          </article>
          {/* /.blog-meta-five */}
        </div>
        /* End .col-md-6 */
      ))}
    </>
  );
};

export default Blog;
