import { ReactNode } from "react";
import { WrapperStyle } from "./Wrapper.style";

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <WrapperStyle>{children}</WrapperStyle>;
};
