
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Box,
  Typography,
} from "@mui/material";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

export default function Sidebar() {
  const pathname = usePathname();

  const menus = [
    {
      title: "Dashboard",
      href: "/",
      icon: <DashboardRoundedIcon />,
    },
    {
      title: "Data Siswa",
      href: "/students",
      icon: <GroupsRoundedIcon />,
    },
    {
      title: "Pengaturan",
      href: "/settings",
      icon: <SettingsRoundedIcon />,
    },
  ];

  return (
    <Box component="aside" className="sidebar">
      <Box className="sidebar-brand">
        <Box className="brand-icon">S</Box>

        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: 19 }}>
            StudentApp
          </Typography>

          <Typography sx={{ fontSize: 12 }} color="text.secondary">
            Sistem Data Siswa
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{ fontWeight: 700, fontSize: 11 }}
        className="menu-label"
      >
        MENU UTAMA
      </Typography>

      <Box component="nav" className="sidebar-menu">
        {menus.map((menu) => {
          const isActive = pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`sidebar-link ${
                isActive ? "active" : ""
              }`}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& svg": {
                      fontSize: 20,
                    },
                  }}
                >
                  {menu.icon}
                </Box>

                {menu.title}
              </Box>
            </Link>
          );
        })}
      </Box>

      <Box className="sidebar-footer">
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          StudentApp v1.0.0
        </Typography>
      </Box>
    </Box>
  );
}
