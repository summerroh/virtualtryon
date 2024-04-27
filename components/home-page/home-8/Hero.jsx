"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Vsq1_kewchQ"
        onClose={() => setOpen(false)}
      />

      <h1 className="hero-heading fw-500 text-white mb-45">
        Trsuted &amp; Secure <span>Crypto</span> Market Exchange.
      </h1>
      <p className="text-lg text-white opacity-75 mb-65 lg-mb-50 pe-lg-5">
        Already have a website? Try our hosting to alive it with
        industry-leading load times.
      </p>

      <div className="d-sm-flex align-items-center">
        <div
          onClick={() => setOpen(true)}
          role="button"
          className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
        >
          <span className="icon d-block">
            <i className="bi bi-play" />
          </span>
          <div className="ps-3">
            <span className="d-block fs-15 text-uppercase tx1">Watch</span>
            <strong className="fs-18 fw-500 text-white d-block">
              Intro Video
            </strong>
          </div>
        </div>
        {/* End popup video */}

        <Link
          href="#"
          className="btn-sixteen fw-500 tran3s mb-25 me-4 order-sm-first"
        >
          Start Trading
        </Link>
      </div>
      <h2 className="fw-500 text-white mt-60 lg-mt-30 mb-5">A+ Rating</h2>
      <p className="fs-20 opacity-50 text-white">
        Avg rating 4.8 makes us world most best apps.
      </p>
    </>
  );
};

export default Hero;
