
import TopNavigationBar from "../MainPage/NavigationBar/TopbarNavigator";
import SidebarMenu from "../MainPage/SidebarMenu/SidebarMenu";
import "./Dashboard.css";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="app-wrapper">
      <TopNavigationBar />
      <div className="content-wrapper">
        <SidebarMenu />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
