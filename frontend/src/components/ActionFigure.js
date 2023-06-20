import React from "react";
import albatsuki from "../assets/Albatsuki.jpg";
import { useNavigate } from "react-router-dom";

const ActionFigure = () => {
  const navigate = useNavigate();
  return (
    <div className="action-figure-container">
      <div className="left-action-figure">
        <div className="top-left-action">
          <div className="logo">
            <img src={albatsuki} alt="Albatsuki" />
          </div>
          <span className="action-text">ACTION FIGURE SERIES</span>
          <div className="shop-now">
            <button onClick={() => navigate("/products")}>SHOP NOW</button>
          </div>
        </div>
        <div className="bottom-left-action">
          <div className="bottom-left-action-left"></div>
          <div className="bottom-left-action-right"></div>
        </div>
      </div>
      <div className="right-parent">
        <div className="right-action-figure"></div>
      </div>
    </div>
  );
};

export default ActionFigure;
