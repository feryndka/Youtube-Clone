import React from "react";

// Menggunakan extend agar dalam props dapat memakai atribut seperti onclick, dll.
interface IButtonFlat extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ButtonFlat = ({ children, ...props }: IButtonFlat) => {
  return (
    <button
      {...props}
      className="bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 flex items-center gap-2 font-medium font-semibold"
    >
      {children}
    </button>
  );
};

export default ButtonFlat;
