interface IButton {
  children: React.ReactNode;
  variant?: "transparent" | "white" | "gray";
}

const Button = ({ children }: IButton) => {
  return (
    <button className="border border-white/20 flex items-center px-3 py-1 rounded-full text-sm font-semibold text-blue-400 hover:bg-blue-400/30 gap-3">
      {children}
    </button>
  );
};

export default Button;
