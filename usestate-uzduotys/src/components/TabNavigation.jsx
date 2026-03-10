import "../assets/css/TabNavigation.css"
import { useState } from "react";

const TabNavigation = () => {
  const tabsInfo = [
    {
      name: "Home",
      contents: "home",
    },
    {
      name: "About",
      contents: "about",
    },
    {
      name: "Contact",
      contents: "contact",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="component tab-navigation_component">
      <h3>Tab Navigation</h3>
      <div className="gray_border">
        <div className="flex_center tab-box_allignment_style">
          {tabsInfo.map((tab, index) => {
            return (
              <button
                className={`tab_padding hover:bg-gray-200 ${activeTab === index ? "bg-gray-300" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.name}
              </button>
            );
          })}
        </div>
        <p>{tabsInfo[activeTab].contents}</p>
      </div>
    </section>
  );
};

export default TabNavigation;
