import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PortraitIcon from "@mui/icons-material/Portrait";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../components/routes/routesModel";
import { useUser } from "../../components/users/providers/UserProvider";
import { useState } from "react";
import { useTheme } from "../../providers/ThemeProvider";

const Footer = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);

  const { user } = useUser();
  const { isDark } = useTheme();
  // #3e3e3e
  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        sx={{
          backgroundColor: isDark ? "#1A3628" : "#2683b6",
          color: isDark ? "#3e3e3e" : "white",
        }}
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        showLabels
      >
        <BottomNavigationAction
          sx={{ color: "white" }}
          onClick={() => navigateTo(ROUTES.ABOUT)}
          label="About"
          icon={<InfoIcon />}
        />
        {user && (
          <BottomNavigationAction
            sx={{ color: "white" }}
            onClick={() => navigateTo(ROUTES.FAV_CARDS)}
            label="Favorites"
            icon={<FavoriteIcon />}
          />
        )}
        {user && user.isBusiness && (
          <BottomNavigationAction
            sx={{ color: "white" }}
            onClick={() => navigateTo(ROUTES.MY_CARDS)}
            label="My Cards"
            icon={<PortraitIcon />}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
