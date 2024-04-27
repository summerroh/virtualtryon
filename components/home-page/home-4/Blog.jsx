import Link from "next/link";
import articles from "@/data/blog";

const Blog = () => {
  return (
    <>
      {articles.slice(3, 6).map((article) => (
        <div
          className="col-lg-4 col-md-6"
          key={article.id}
          data-aos="fade-up"
          data-aos-delay={article.delay}
        >
          <article className="blog-meta-two mt-30">
            <Link
              href={`/blog/${article.id}`}
              className="tag fw-bold text-uppercase"
              style={article.tagStyle}
            >
              {article.tag}
            </Link>
            <Link
              href={`/blog/${article.id}`}
              className="blog-title mt-15 mb-10"
            >
              <h4 className="tran3s">{article.title}</h4>
            </Link>
            <p className="fs-17 mb-35">{article.description}</p>
            <Link
              href={`/blog/${article.id}`}
              className="btn-ten fs-16 fw-500 position-relative"
            >
              Read More <i className="fa-solid fa-angle-right" />
            </Link>
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog;
