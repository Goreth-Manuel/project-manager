import React from "react";

export interface MenuItem {
    label: string;
    icon: string;
    active: boolean;
    path: string;
  }
  
  export interface SidebarViewModel {
    isCollapsed: boolean;
    menuItems: MenuItem[];
    toggleSidebar: () => void;
  }
  
  export const useSidebarViewModel = (): SidebarViewModel => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
  
    const toggleSidebar = () => setIsCollapsed((prev) => !prev);
  
    return {
      isCollapsed,
      toggleSidebar,
      menuItems: [
        { label: "Dashboard", icon: "🏠", path: "/dashboard", active: true },
        { label: "Projectos", icon: "🎨", path: "/project", active: true },
        { label: "Detalhes", icon: "✏️", path: "/detalhes", active: true },
        { label: "Novo Projecto", icon: "📦", path: "/newProject", active: true },
        { label: "logout", icon: "", path: "/", active: true },
      ],
    };
  };
  