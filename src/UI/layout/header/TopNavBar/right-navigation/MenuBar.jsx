import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import NavBarLink from "../../../../components/routes/NavBarLink";
import ROUTES from "../../../../components/routes/routesModel";
import { useUser } from "../../../../components/users/providers/UserProvider";
import useUsers from "../../../../components/users/hooks/useUsers";
import { useTheme } from "../../../../providers/ThemeProvider";

const MenuBar = ({ isMenuOpen, anchorEl, onCloseMenu }) => {
  const { user } = useUser();
  const { handleLogout } = useUsers();
  const { isDark } = useTheme();

  const onLogout = () => {
    handleLogout();
    onCloseMenu();
  };

  return (
    <MuiMenu
      open={isMenuOpen}
      onClose={onCloseMenu}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {user && (
        <Box>
          <NavBarLink to={`${ROUTES.USER_PROFILE}/${user._id}`}>
            <MenuItem
              sx={{ color: isDark ? "white" : "black" }}
              onClick={onCloseMenu}
            >
              Profile{" "}
            </MenuItem>
          </NavBarLink>

          <NavBarLink to={`${ROUTES.EDIT_USER}/${user._id}`}>
            <MenuItem sx={{ color: isDark ? "white" : "black" }} onClick={onCloseMenu}>Edit account</MenuItem>
          </NavBarLink>

          <NavBarLink to={ROUTES.LOGIN}>
            <MenuItem sx={{ color: isDark ? "white" : "black" }} onClick={onLogout}>Logout</MenuItem>
          </NavBarLink>
        </Box>
      )}

      <NavBarLink to={ROUTES.ABOUT}>
        <MenuItem sx={{ color: isDark ? "white" : "black" }} onClick={onCloseMenu}>About</MenuItem>
      </NavBarLink>

      {!user && (
        <Box>
          <NavBarLink to={ROUTES.LOGIN}>
            <MenuItem
              sx={{ display: { xs: "block", md: "none" },  }}
              onClick={onCloseMenu}
            >
              Login
            </MenuItem>
          </NavBarLink>

          <NavBarLink to={ROUTES.SIGNUP}>
            <MenuItem
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={onCloseMenu}
            >
              SignUp
            </MenuItem>
          </NavBarLink>
        </Box>
      )}
    </MuiMenu>
  );
};

export default MenuBar;
