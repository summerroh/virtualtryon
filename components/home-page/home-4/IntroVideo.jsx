"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";

const IntroVideo = () => {
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

      <div className="video-banner position-relative mt-170 mb-35 lg-mt-70 md-mb-20">
        <img src="/images/media/img_29.png" alt="" className="lazy-img" />
        <button
          className="fancybox video-icon tran3s rounded-circle d-flex align-items-center justify-content-center"
          onClick={() => setOpen(true)}
        >
          <i className="bi bi-play-fill" />
        </button>
      </div>
    </>
  );
};

export default IntroVideo;
