import Link from "next/link";
import blogData from "@/data/blog";

const Blog = () => {
  return (
    <div className="row">
      {blogData.slice(25, 27).map((item, index) => (
        <div
          className="col-md-6 d-flex"
          data-aos="fade-up"
          data-aos-delay={(index + 1) * 100}
          key={index}
        >
          <article
            className="blog-meta-six d-flex flex-column position-relative zn2 mt-40"
            style={{ backgroundImage: `url(${item.imageSrc})` }}
          >
            <div className="post-data position-relative d-flex flex-column h-100">
              <div className="blog-header">
                <div>
                  <Link
                    href={`/blog/${item.id}`}
                    className="tag text-uppercase fw-500 tran3s mb-20"
                  >
                    {item.tag}
                  </Link>
                </div>
                <Link href={`/blog/${item.id}`}>
                  <h4 className="tran3s blog-title">{item.title}</h4>
                </Link>
              </div>
              {/* /.blog-header */}
              <div className="blog-footer d-flex align-items-center justify-content-between mt-auto">
                <div className="blog-date tran3s fw-500 tx-dark">
                  Featured -
                  <a href="#" className="fw-normal tran3s">
                    {item.date}
                  </a>
                </div>
                <Link href={`/blog/${item.id}`} className="read-more tran3s">
                  <i className="bi bi-arrow-up-right" />
                </Link>
              </div>
              {/* /.blog-footer */}
            </div>
            {/* /.post-data */}
          </article>
          {/* /.blog-meta-six */}
        </div>
      ))}
    </div>
  );
};

export default Blog;
