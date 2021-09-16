import React, { useEffect, useState, useRef } from 'react';
import DropDownItemList from './DropDownItemList';

const DropDownButton = props => {
  const myRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [isDown, setIsDown] = useState(false);
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, {
      passive: true
    });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = e => {
    if (myRef && !myRef.current.contains(e.target)) {
      setOpen(false);
      setIsDown(false);
    }
  };

  const handleClickInside = () => {
    setOpen(!open);
    setIsDown(!isDown);
  };

  return /*#__PURE__*/React.createElement("div", {
    ref: myRef,
    className: "dropdown-button-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-button-main"
  }, /*#__PURE__*/React.createElement("button", {
    href: "https://github.com/inbalchen",
    target: "_blank",
    rel: "noreferrer",
    className: "dropdown-button",
    style: {
      backgroundColor: props.mainBgColor
    }
  }, props.defaultOption.icon && /*#__PURE__*/React.createElement("img", {
    src: props.defaultOption.icon,
    alt: props.defaultOption.name
  }), props.defaultOption.text), /*#__PURE__*/React.createElement("button", {
    className: isDown ? 'drop-down-btn-open' : 'drop-down-btn-close',
    onClick: handleClickInside,
    style: {
      backgroundColor: props.mainBgColor
    }
  }, isDown ? /*#__PURE__*/React.createElement("img", {
    src: props.arrowUpIcon,
    alt: "down-up"
  }) : /*#__PURE__*/React.createElement("img", {
    src: props.arrowDownIcon,
    alt: "down-up"
  }))), open && /*#__PURE__*/React.createElement("ul", {
    className: "dropdown-list"
  }, props.options && props.options.map(option => /*#__PURE__*/React.createElement(DropDownItemList, {
    key: option.name,
    icon: option.icon,
    text: option.text,
    name: option.name,
    link: option.link
  }))));
};

export default DropDownButton;