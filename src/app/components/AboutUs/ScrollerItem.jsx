// ScrollerItem.js
import React from "react";

const ScrollerItem = ({ text, imageSrc, altText }) => (
  <div className="shrink-0">
    {text}
    <div className="inline-block align-middle mx-4 sm:mx-10">
      <img src={imageSrc} alt={altText} className="w-[3ch] aspect-square object-contain" />
    </div>
  </div>
);

export default ScrollerItem;
