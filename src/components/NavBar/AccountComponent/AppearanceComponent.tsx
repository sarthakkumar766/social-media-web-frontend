import { MenuItem, Divider, ListItemIcon, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Check } from "@mui/icons-material";
import { colorScheme } from "../../../constants/theme-constants";

interface AppearanceProp {
  themeSelect: Function;
  changeColorMode: Function;
  handleClose: Function;
}

const AppearanceComponent = ({
  themeSelect,
  changeColorMode,
  handleClose,
}: AppearanceProp) => {
  const { DARK_MODE, LIGHT_MODE, SYSTEM } = colorScheme;
  const themeChange = (theme: string) => {
    localStorage.theme = theme;
    changeColorMode();
    handleClose();
  };
  const backHandler = () => {
    themeSelect();
  };
  return (
    <>
      <div className="menuItem-div-style" style={{ padding: "0 0 8px 8px" }}>
        <div className="menuItem-div-style" style={{ marginRight: "4px" }}>
          <IconButton onClick={backHandler}>
            <ArrowBackIcon fontSize="medium" />
          </IconButton>
        </div>
        <div className="menuItem-div-style">Appearance</div>
      </div>
      <Divider />
      <MenuItem
        sx={{ marginTop: 1 }}
        onClick={() => {
          themeChange(SYSTEM);
        }}
      >
        <ListItemIcon>
          {localStorage.theme !== LIGHT_MODE &&
          localStorage.theme !== DARK_MODE ? (
            <Check fontSize="small" />
          ) : (
            ""
          )}
        </ListItemIcon>
        System
      </MenuItem>
      <MenuItem
        onClick={() => {
          themeChange(DARK_MODE);
        }}
      >
        <ListItemIcon>
          {localStorage.theme === DARK_MODE ? <Check fontSize="small" /> : ""}
        </ListItemIcon>
        Dark
      </MenuItem>
      <MenuItem
        onClick={() => {
          themeChange(LIGHT_MODE);
        }}
      >
        <ListItemIcon>
          {localStorage.theme === LIGHT_MODE ? <Check fontSize="small" /> : ""}
        </ListItemIcon>
        Light
      </MenuItem>
    </>
  );
};

export default AppearanceComponent;
