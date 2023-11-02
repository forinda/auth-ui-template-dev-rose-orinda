import React, { ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};
function Layout({ children }: LayoutProps) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
