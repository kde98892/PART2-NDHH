import { Outlet } from "react-router";
import Header from "@/components/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
