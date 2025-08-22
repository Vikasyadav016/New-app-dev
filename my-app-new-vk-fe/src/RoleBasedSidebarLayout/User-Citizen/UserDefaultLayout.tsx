
import { Outlet } from 'react-router-dom';

import './UserDefaultLayout.css';
import Topbar from '../Navigators/Topbar/Topbar';
import SidebarMenu from '../Navigators/Sidebar/Sidebar';

const UserDefaultLayout = () => {
    // Assume you get user role from context or props
    const userRole = 'citizen'; // Example

    return (
        <div className="user-layout">
            <Topbar />
            <div className="layout-body">
                <SidebarMenu role={userRole} />
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default UserDefaultLayout;
