import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function DashboardMenu({ activeTab, setActiveTab }) {
  const [open, setOpen] = useState(false);

  const tabs = [
    { key: "overview", label: "Tổng quan" },
    { key: "lists", label: "Danh sách" },
    { key: "manage", label: "Quản lý" },
    { key: "messages", label: "Tin nhắn" },
    { key: "overviewparent", label: "Phụ huynh" },
  ];

  return (
    <div>
      {/* Nút mở menu */}
      <IconButton onClick={() => setOpen(true)} sx={{ color: "black" }}>
        <MenuIcon />
      </IconButton>

      {/* Drawer menu */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250, backgroundColor: "#fafafa", height: "100%" }}>
          {tabs.map((tab) => (
            <ListItem key={tab.key} disablePadding>
              <ListItemButton
                selected={activeTab === tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setOpen(false);
                }}
              >
                <ListItemText
                  primary={tab.label}
                  primaryTypographyProps={{
                    fontWeight: activeTab === tab.key ? "bold" : "normal",
                    color: activeTab === tab.key ? "#1976d2" : "black",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
