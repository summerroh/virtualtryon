import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import SearchBox from "@/components/blog/SearchBox";
import Category from "@/components/blog/Category";
import RecentPost from "@/components/blog/RecentPost";
import BannerPost from "@/components/blog/BannerPost";
import Tag from "@/components/blog/blog-details/Tag";
import SocialShare from "@/components/blog/blog-details/SocialShare";
import SingleComments from "@/components/blog/blog-details/SingleComments";
import CommentBox from "@/components/blog/blog-details/CommentBox";
import Link from "next/link";

import blogsData from "@/data/blog";
import Image from "next/image";
export const metadata = {
  title:
    "Dynamic Blog Details || Jano - Creative Multipurpose React NextJS Template",
};
const DynamicBlogDetails = ({ params }) => {
  const id = params.id;
  const blog = blogsData.find((item) => item.id == id) || blogsData[0];

  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
			=============================================
			Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-9" data-aos="fade-right">
              <p className="blog-pubish-date">
                Digital Marketing . 2 July . By
                <a href="#" className="fw-500">
                  Hasan Ira
                </a>
              </p>
              <h2 className="blog-heading-one tx-dark">{blog?.title}</h2>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
			=====================================================
				Blog Section Five
			=====================================================
			*/}
      <div className="blog-details-one mt-80 lg-mt-60">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-8">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <article className="blog-details-content">
                    {blog.imageSrc && (
                      <Image
                        width={816}
                        height={597}
                        layout="responsive"
                        src={blog.imageSrc}
                        alt={blog.title}
                        className="lazy-img image-meta w-100"
                      />
                    )}
                    <p>
                      Tomfoolery crikey bits and bobs brilliant bamboozled down
                      the pub amongst brolly hanky panky, cack bonnet arse over
                      tit burke bugger all mate bodge. cillum dolore eu fugiat
                      pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.Suspendisse interdum consectetur libero id faucibu
                      nisl. Lacus vel facilisis volutpat est velit egestas.
                    </p>
                    <p>
                      Tempus imperdiet nulla malesuada pellentesque elit eget
                      gravida cum. Sit amet ris nullam eget felis. Enim praesent
                      elementum facilisis leo. Ultricies leo integer.
                    </p>
                    <Image
                      width={800}
                      height={410}
                      src="/images/blog/blog_img_26.jpg"
                      alt="blog"
                      className="lazy-img image-meta w-100"
                    />
                    <h4>
                      This response is important for our ability to from
                      mistakes but it alsogives rise to self-criticism.
                    </h4>
                    <p>
                      One touch of a red-hot stove is usually all we need to
                      avoid that kind of discomfort in future The same is true
                      as we experienc the emotional of stress from our
                      instances. We are quickly learn to fear and thus
                      automatically. Lorem ipsum dolor sit amet, consectetur
                      adipis elit quis extraction labore.
                    </p>
                    <h2>Work Harder &amp; Gain Succsess</h2>
                    <p>
                      One touch of a red-hot stove is usually all we need to
                      avoid that kind of discomfort in quis elit future. The
                      same Duis aute irure dolor in reprehenderit .
                    </p>
                    <p>
                      is true as we experience the emotional sensation of stress
                      from our firs social rejec ridicule.We quickly learn to
                      fear and thus automatically. potentially stressful
                      situation of wlir ext quiert all kinds, including the most
                      common of all.
                    </p>
                    <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                      <Tag />
                      <SocialShare />
                    </div>
                    {/* /.bottom-widget */}
                  </article>
                  {/* /.blog-details-content */}

                  <div className="blog-comment-area">
                    <h3 className="blog-inner-title tx-dark pb-15">
                      2 Comments
                    </h3>
                    <SingleComments />
                  </div>
                  {/* /.blog-comment-area */}

                  <div className="blog-comment-form">
                    <h3 className="blog-inner-title tx-dark">
                      Leave A Comment
                    </h3>
                    <p>
                      <Link href="/login" className="text-decoration-underline">
                        Sign
                      </Link>
                      in to post your comment or signup if you dont have any
                      account.
                    </p>
                    <CommentBox />
                  </div>
                  {/* /.blog-comment-form */}
                </div>
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4 col-md-8">
                <div className="blog-sidebar md-mt-70">
                  <div className="blog-sidebar-search mb-55 md-mb-40">
                    <SearchBox />
                  </div>
                  {/* /.blog-sidebar-search */}

                  <div className="blog-sidebar-category mb-60 md-mb-50">
                    <h4 className="sidebar-title">Category</h4>
                    <Category />
                  </div>
                  {/* /.blog-sidebar-category */}

                  <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">Recent News</h4>
                    <RecentPost />
                  </div>
                  {/* /.sidebar-recent-news */}

                  <BannerPost />
                  {/* /.sidebar-banner-add */}
                </div>
                {/* /.blog-sidebar */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default DynamicBlogDetails;
