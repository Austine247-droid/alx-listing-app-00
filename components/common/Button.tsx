interface ButtonProps {
  title: string;
  ContainerStyles: string;
}

const Button = ({ title, ContainerStyles }: ButtonProps) => {
  return (
    <button
      className={`px-[11px] py-[6px] bg-[#161117] rounded-full text-white text-[14px]${ContainerStyles}`}
    >
      {title}
    </button>
  );
};

export default Button;
