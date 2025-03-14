import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Home, Settings, Info, BookOpen, Mail, Link2 } from "lucide-react";

const sidebarLinks = [
  {
    icon: Home,
    label: "Home",
    path: "/"
  },
  {
    icon: BookOpen,
    label: "Blog",
    path: "/blog"
  },
  {
    icon: Info,
    label: "About",
    path: "/about"
  },
  {
    icon: Link2,
    label: "Links",
    path: "/links"
  },
  {
    icon: Mail,
    label: "Contact",
    path: "/contact"
  },
  {
    icon: Settings,
    label: "Settings",
    path: "/settings"
  }
];

interface SidebarNavProps {
  onLinkClick: () => void;
}

const SidebarNav = ({ onLinkClick }: SidebarNavProps) => {
  const location = useLocation();

  return (
    <nav className="p-4 space-y-1 relative z-10">
      {sidebarLinks.map(item => (
        <Link
          key={item.label}
          to={item.path}
          onClick={onLinkClick}
          className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
            location.pathname === item.path
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <item.icon className="h-5 w-5" />
          <span className="font-medium">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default SidebarNav;
