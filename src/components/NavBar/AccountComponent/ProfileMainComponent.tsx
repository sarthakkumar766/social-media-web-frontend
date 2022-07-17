import {
  DesktopMac,
  LightMode,
  Settings,
  Logout,
  DarkMode,
  KeyboardArrowRight,
} from "@mui/icons-material";
import {
  MenuItem,
  Avatar,
  Divider,
  Container,
  ListItemIcon,
} from "@mui/material";
import { colorScheme } from "../../../constants/theme-constants";

interface ProfileMainProps {
  themeSelect: Function;
}

const ProfileMainComponent = ({ themeSelect }: ProfileMainProps) => {
  const { DARK_MODE, LIGHT_MODE } = colorScheme;
  return (
    <>
      <MenuItem>
        <Avatar /> Name Here
      </MenuItem>
      <Divider />

      <MenuItem
        onClick={() => {
          themeSelect();
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0 !important",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div className="menuItem-div-style">
            <ListItemIcon>
              {localStorage.theme === DARK_MODE ? (
                <DarkMode fontSize="small" />
              ) : localStorage.theme === LIGHT_MODE ? (
                <LightMode fontSize="small" />
              ) : (
                <DesktopMac fontSize="small" />
              )}
            </ListItemIcon>
            Appearance
          </div>
          <div className="menuItem-div-style">
            <KeyboardArrowRight />
          </div>
        </Container>
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </>
  );
};

export default ProfileMainComponent;
