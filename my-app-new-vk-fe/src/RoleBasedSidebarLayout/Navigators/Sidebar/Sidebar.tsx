import { Link } from 'react-router-dom';
import './Sidebar.css';
import { roleMenus } from '../../Roles/RoleMenu';

const SidebarMenu = ({ role }:any) => {
    const menuItems = roleMenus[role] || [];

    return (
        <aside className="sidebar">
            <ul>
                {menuItems.map((item:any) => (
                    <li key={item.path}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SidebarMenu;
