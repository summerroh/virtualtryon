"use client";

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const ImgGallery = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="rDYdeq3JW_E"
        onClose={() => setOpen(false)}
      />

      <div className="img-gallery md-mt-60 ">
        <div className="row align-items-center" data-aos="fade-right">
          <div className="col-6">
            <Image
              width={256}
              height={310}
              src="/images/media/img_79.jpg"
              alt="media"
              className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
            <Image
              width={200}
              height={219}
              src="/images/media/img_80.jpg"
              alt="media"
              className="lazy-img ms-auto mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
          </div>
          <div className="col-6">
            <Image
              width={256}
              height={367}
              src="/images/media/img_81.jpg"
              alt="media"
              className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
          </div>
        </div>
        {/* End .row */}

        <button
          className="fancybox video-icon rounded-circle tran3s d-flex align-items-center justify-content-center"
          onClick={() => setOpen(true)}
        >
          <i className="fas fa-play" />
        </button>

        <img
          src="/images/shape/shape_165.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_163.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <div className="shapes shape-three" />
      </div>
    </>
  );
};

export default ImgGallery;
