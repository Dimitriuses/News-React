import React from "react";

import NewsItem from "../NewsItem/NewsItem";
import "./NewsList.css";

/**
 * Keyed on `url` rather than the 2019 `publishedAt`: the snapshot articles have no
 * publishedAt, and a URL is unique per article in both the snapshot and the live API.
 */
const NewsList = ({ List }) => {
  if (List.length === 0) {
    return <p className="grid-empty">No headlines match that search.</p>;
  }

  return (
    <div className="grid">
      {List.map(item => (
        <NewsItem
          key={item.url}
          title={item.title}
          description={item.description}
          image={item.urlToImage}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default NewsList;
