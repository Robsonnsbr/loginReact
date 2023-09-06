import { ReactNode } from "react";
import { PageStyle } from "./Page.Style";

interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return <PageStyle>{children}</PageStyle>;
};
