import React from "react";
import "./NewsItem.css";

/**
 * The 2019 version was a class component carrying three pieces of state -- btnChange,
 * btnText and favorite -- plus onBtnClick and onFavorivteClick handlers and a btnStar
 * class name. None of it was ever attached to an element, so no star or toggle button
 * was ever rendered; the build warned that btnStar was assigned and never used. All of
 * it is gone, which leaves a plain presentational component.
 */
const NewsItem = ({ title, description, image, url }) => (
  <div className="grid-item">
    <div className="card">
      {image && <img className="card-img-top" src={image} alt="" />}
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the story
        </a>
      </div>
    </div>
  </div>
);

export default NewsItem;
