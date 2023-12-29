import { AppBarProps } from "./types";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const drawerWidth = 240;

export function AppBar({ config, ...props }: AppBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <Button onClick={handleDrawerToggle}>MENU</Button>
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
          <p>T</p>
        </IconButton> */}
        <Typography variant="h6" noWrap component="div">
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
