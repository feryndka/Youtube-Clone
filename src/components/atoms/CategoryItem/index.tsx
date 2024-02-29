import React from "react";

const CategoryItem = ({ isActive, title }: { isActive?: boolean, title:string }) => {
  return (
    <button
      className={`${
        isActive ? "bg-white text-black" : "bg-[#272727] hover:bg-white/25"
      } py-1 px-3 rounded-lg transition-all font-semibold text-sm text-nowrap`}
    >
      {title}
    </button>
  );
};

export default CategoryItem;
