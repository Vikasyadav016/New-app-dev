import sidebarContent, { useSidebarAction } from "./SidebarContent";
import "./SidebarMenu.css";

const SidebarMenu = () => {
  const { handleClickSidebarTabUrl } = useSidebarAction();

  return (
    <div className="sidebar">
      <ul className="sidebar-listing">
        {sidebarContent?.map((menu: any) => (
          <li
            key={menu.key}
            style={{
              backgroundColor: menu.key === "msg" ? "green" : undefined,
            }}
            onClick={(e) => handleClickSidebarTabUrl(e, menu.url)}
          >
            {menu.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
