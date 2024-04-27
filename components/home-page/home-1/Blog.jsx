import Image from "next/image";
import Link from "next/link";
import blogs from "@/data/blog";

const Blog = () => {
  return (
    <>
      {blogs.slice(0, 3).map((post, index) => (
        <div
          key={index}
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={post.delay}
        >
          <article className="blog-meta-three mt-40" data-aos="fade-up">
            <figure className="post-img m0">
              <Link href={`/blog/${post.id}`} className="w-100 d-block">
                <Image
                  width={410}
                  height={300}
                  src={post.imageSrc}
                  alt="blog"
                  className="lazy-img w-100 tran4s"
                />
              </Link>
            </figure>
            <div className="post-data mt-40">
              <div className="post-date opacity-75 text-uppercase">
                {post.date}
              </div>
              <Link href={`/blog/${post.id}`} className="mt-5 mb-35 lg-mb-20">
                <h4 className="tran3s blog-title fw-normal tx-dark">
                  {post.title}
                </h4>
              </Link>
              <div>
                <Link
                  href={`/blog/${post.id}`}
                  className="read-btn-two fw-500 tran3s"
                >
                  Read More
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
