"use client";

import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PropertyBlock from "./PropertyBlock";

const ProperyFilter = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabNames = ["PROPERTY", "CONDOS", "LAND"];

  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <>
      <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect}>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-5" data-aos="fade-right">
            <div className="title-style-eleven text-center text-md-start sm-mb-30">
              <h2 className="main-title tx-dark">Best Property.</h2>
            </div>
          </div>
          {/* End .col-lg-6 */}

          <div className="col-lg-6 col-md-7" data-aos="fade-left">
            <TabList className="nav nav-tabs border-0 justify-content-center justify-content-md-end">
              {tabNames.map((tabName, index) => (
                <Tab key={index}>
                  <button
                    className={`nav-link ${
                      activeTabIndex === index ? "active" : ""
                    }`}
                  >
                    {tabName}
                  </button>
                </Tab>
              ))}
            </TabList>
          </div>
        </div>
        {/* End row list */}

        <div className="tab-content mt-50 lg-mt-20">
          {tabNames.map((tabName, index) => (
            <TabPanel key={index}>
              <div className="row" data-aos="fade">
                <PropertyBlock />
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </>
  );
};

export default ProperyFilter;
