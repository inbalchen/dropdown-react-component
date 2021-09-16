import React from 'react';

const DropDownItemList = ({
  icon,
  text,
  name,
  link
}) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: link || '#',
  target: "_blank",
  rel: "noreferrer",
  className: "dropdown-button-list-item"
}, icon && /*#__PURE__*/React.createElement("img", {
  src: icon,
  alt: name,
  style: {
    width: '20px',
    marginRight: '12px'
  }
}), text)));

export default DropDownItemList;