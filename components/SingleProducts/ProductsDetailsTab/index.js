import React, { useState } from "react";
import Description from "./Description";
import AdditionalInformation from "./AdditionalInformation";
import Reviews from "./Reviews";

const ProductsDetailsTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="tab products-details-tab">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <ul className="tabs">
              <li
                className={`list ${activeTab === 0 ? "current" : ""}`}
                onClick={() => handleTabClick(0)}
              >
                <div className="dot"></div> Description
              </li>

              <li
                className={`list ${activeTab === 1 ? "current" : ""}`}
                onClick={() => handleTabClick(1)}
              >
                <div className="dot"></div> Additional information
              </li>

              <li
                className={`list ${activeTab === 2 ? "current" : ""}`}
                onClick={() => handleTabClick(2)}
              >
                <div className="dot"></div> Reviews
              </li>
            </ul>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="tab_content">
              {activeTab === 0 && <Description />}
              {activeTab === 1 && <AdditionalInformation />}
              {activeTab === 2 && <Reviews />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetailsTab;
