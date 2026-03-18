import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" spellCheck="false">
      My Favourite Foods
    </h1>
    <img src={img} />
    <img
      className="food-img"
      src="https://img.taste.com.au/5wpixvYq/w720-h480-cfill-q80/taste/2025/10/fluffy-steamed-white-rice-with-chicken-218137-1.jpg"
      alt=""
    />
    <img
      className="food-img"
      src="https://images.getrecipekit.com/20221130023757-untitled-design-12-3.png?aspect_ratio=16:9&quality=90&"
      alt=""
    />
    <img
      className="food-img"
      src="https://v.cdn.ww.com/media/system/wine/62162456f90c39001e6f7190/490487dd-8588-48dd-a959-0490e8da65cd/gfidqialu0gdh84ki7s2.jpg"
      alt=""
    />
    <div></div>
  </div>,
  document.getElementById("root")
);
