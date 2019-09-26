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
      <div >
        <div className="grid" id="sortable" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>{newItem}</div>
      </div>
      <script>
       var grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 200
        });
        grid.imagesLoaded().progress( function() {
          grid.masonry('layout');
        });
      </script>
    </Fragment>
  );
};

export default NewsList;