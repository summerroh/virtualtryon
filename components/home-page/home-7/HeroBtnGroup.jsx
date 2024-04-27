"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";

const HeroBtnGroup = () => {
  const options = [
    {
      value: "IOS & Android",
      label: "IOS & Android",
      icon: "/images/icon/icon_22.svg",
    },
    {
      value: "Mac & Windows",
      label: "Mac & Windows",
      icon: "/images/icon/icon_23.svg",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (event, value) => {
    event.preventDefault();
    setSelectedValue(value);
    setShowDropdown(false);
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="20QUNgFIrK0"
        onClose={() => setOpen(false)}
      />

      <div className="d-sm-flex align-items-center">
        <div
          className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
          onClick={() => setOpen(true)}
          role="button"
        >
          <i className="bi bi-play" />
          <div className="ps-3">
            <span className="d-block fs-15 text-uppercase">Watch</span>
            <strong className="fs-18 fw-normal tx-dark d-block">
              Intro Video
            </strong>
          </div>
        </div>

        <div
          className="dropdown download-btn d-inline-block mb-25 me-4 order-sm-first"
          onClick={toggleDropdown}
        >
          <button
            className="dropdown-toggle tran3s"
            type="button"
            id="appDownBtn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedValue ? selectedValue : "Download - It’s free"}
          </button>
          <ul
            className={`dropdown-menu ${showDropdown ? "show" : ""}`}
            aria-labelledby="appDownBtn"
          >
            {options.map((option, index) => (
              <li key={index}>
                <a
                  className="dropdown-item d-flex align-items-center fw-500"
                  href="#"
                  onClick={(e) => handleOptionClick(e, option.label)}
                >
                  <img src={option.icon} alt="" />
                  <span className="ps-2">{option.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroBtnGroup;
