import React, { Fragment } from "react";

import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({
  List
}) => {
  const newItem = List.map((item) => {
    return (
      <NewsItem
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
        url={item.url}
        favorite={item.favorite}
      />
    );
  });
  return (
    <Fragment>
      <div className="grid">
        <div id="sortable">{newItem}</div>
      </div>
    </Fragment>
  );
};

export default NewsList;