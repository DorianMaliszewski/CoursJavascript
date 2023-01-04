import React, { ReactNode } from "react";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 h-full">
      <aside className="col-span-2">
        <SideBar />
      </aside>
      <div className="flex flex-col col-span-10 h-full">
        <main className="pl-32 pr-12 py-12 flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
