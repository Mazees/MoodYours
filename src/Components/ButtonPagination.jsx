import React from "react";

const ButtonPagination = ({onClick, page, currentPage, className=""}) => {
  return (
    <button
      onClick={onClick}
      className={`w-7 h-7 poppins-bold text-xs ${
        page == currentPage
          ? "text-brown-primary bg-brown-quaternary"
          : "bg-brown-primary text-brown-quaternary"
      } rounded-lg cursor-pointer hover:bg-brown-quaternary hover:text-brown-primary caret-transparent ${className}`}
    >
      {page}
    </button>
  );
};

export default ButtonPagination;
