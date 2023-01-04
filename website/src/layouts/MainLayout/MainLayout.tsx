import { useLocation } from "@tanstack/react-location";
import { ReactNode, useEffect, useState } from "react";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";

type MainLayoutProps = {
  children: ReactNode;
};

const needAutoClose = screen.width < 1024;

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(
    !needAutoClose ? true : false
  );
  const { current } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [current]);

  return (
    <div className="lg:grid lg:grid-cols-12 h-full max-w-screen">
      <SideBar
        opened={isSideBarOpen}
        onClose={() => setIsSideBarOpen(false)}
        autoClose={needAutoClose}
      />
      <div className="flex flex-col lg:col-start-3 lg:col-span-10 h-full">
        {needAutoClose ? (
          <div className="lg:pl-32 pt-4 ml-4">
            <button
              className="btn btn-ghost"
              onClick={() => setIsSideBarOpen(true)}
            >
              Menu
            </button>
          </div>
        ) : null}
        <main
          className={`px-4 lg:pl-32 lg:pr-12 lg:py-12 py-8 flex-grow flex flex-col flex-wrap max-w-screen`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
