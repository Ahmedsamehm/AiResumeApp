import {
  Folder,
  Home,
  HomeIcon,
  LayoutDashboardIcon,
  LogInIcon,
  Settings,
  SettingsIcon,
  User,
  UserRoundPen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, NavLink, useLocation } from "react-router-dom"; // Import useLocation
import { memo, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

const AppSidebar = () => {
  const { userId, logoutUser } = useContext(AuthContext);

  return (
    <Sidebar>
      <SidebarContent className="bg-surface-a10 text-light-a0 ">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary-a10">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `w-full justify-start hover:bg-surface-a20 hover:text-primary-a20 flex items-center px-4 py-2 ${
                      isActive
                        ? "bg-surface-a20 text-primary-a20"
                        : "text-light-a0"
                    }`
                  }
                >
                  <HomeIcon className="mr-2 h-4 w-4" />
                  Home
                </NavLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `w-full justify-start hover:bg-surface-a20 hover:text-primary-a20 flex items-center px-4 py-2 font-semibold ${
                      isActive
                        ? "bg-surface-a20 text-primary-a20"
                        : "text-light-a0"
                    }`
                  }
                >
                  <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                  Dashboard
                </NavLink>
              </SidebarMenuItem>
              {!userId ? (
                <SidebarMenuItem>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `w-full justify-start hover:bg-surface-a20 hover:text-primary-a20 flex items-center px-4 py-2 ${
                        isActive
                          ? "bg-surface-a20 text-primary-a20"
                          : "text-light-a0"
                      }`
                    }
                  >
                    <LogInIcon className="mr-2 h-4 w-4" />
                    Login
                  </NavLink>
                </SidebarMenuItem>
              ) : (
                <Button
                  className="border-primary-a10 hover:bg-opacity-90 transition-colors border text-light-a0 bg-surface-a10 hover:bg-surface-a20 hover:text-primary-a20 w-full justify-start flex items-center px-4 py-2"
                  onClick={logoutUser}
                >
                  Logout
                </Button>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default memo(AppSidebar);
