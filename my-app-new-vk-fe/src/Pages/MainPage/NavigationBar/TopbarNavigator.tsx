import navigationMenuContent, { useTobarnavigationActions } from "./navigateMenuContent";
import "./TopbarNavigationBar"


const TopNavigationBar = () => {
  const navigationMenu = navigationMenuContent;
  const { handleClickNavLink } = useTobarnavigationActions();
  return (
    <div className="dashboard">
      <div className="navigationbar">
        <ul className="listing">
          {navigationMenu &&
            navigationMenu.map((menu:any) => {
              return (
                <li
                  key={menu?.key}
                  onClick={(e) => handleClickNavLink(e, menu?.link)}
                  className={
                    menu?.key && menu?.value === "profile"
                      ? "profile-styling"
                      : ""
                  }
                >
                  {menu?.value}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default TopNavigationBar;
