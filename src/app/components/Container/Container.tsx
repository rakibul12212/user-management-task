
import { ContainerProps } from "../type/Type";

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`w-full max-w-[1504px] py-10 mx-auto px-2 md:px-10 ${className} `}
    >
      {children}
    </div>
  );
};
