import React from "react";

const SidebarItemLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <div className="h-px bg-white/25 mb-2 mt-3"></div>
    </div>
  );
};

export default SidebarItemLayout;
