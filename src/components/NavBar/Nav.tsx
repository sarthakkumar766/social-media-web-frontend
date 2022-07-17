import { MouseEventHandler, useState } from "react";
import {
  Container,
  AppBar,
  Grid,
  Toolbar,
  IconButton,
  Menu,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ProfileMainComponent from "./AccountComponent/ProfileMainComponent";
import AppearanceComponent from "./AccountComponent/AppearanceComponent";

interface NavProp {
  changeColorMode: Function;
}

const Nav = ({ changeColorMode }: NavProp) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openAppearence, setOpenAppearance] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpenAppearance(false);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const themeSelect = () => {
    setOpenAppearance(!openAppearence);
  };
  return (
    <>
      <AppBar position="sticky" color="appBar">
        <Toolbar sx={{ justifyContent: "center", padding: "0 !important" }}>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              maxWidth="xl"
              // sx={{padding: "0 24px"}}
            >
              <div>
                <AdbIcon color="primary" fontSize="large" />
              </div>

              <div>
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  aria-label="account"
                  disableTouchRipple
                >
                  <AccountCircleIcon color="primary" fontSize="large" />
                </IconButton>
              </div>
            </Grid>
          </Container>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            // onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 4px 8px rgba(100,100,100,0.32))",
                mt: 0,
                width: 220,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1.5,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 17,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {openAppearence ? (
              <AppearanceComponent
                themeSelect={themeSelect}
                changeColorMode={changeColorMode}
                handleClose={handleClose}
              />
            ) : (
              <ProfileMainComponent themeSelect={themeSelect} />
            )}
          </Menu>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ marginTop: 1 }}></Container>
    </>
  );
};

export default Nav;
