import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import LeftNavBar from "./left-navigation/LeftNavBar";
import SearchBar from "./right-navigation/SearchBar";
import RightNavBar from "./right-navigation/RightNavBar";
import MenuProvider from "./menu/MenuProvider";
import { useTheme } from "../../../providers/ThemeProvider";

export const NavBar = () => {
    const { isDark } = useTheme();

    return (
        <MenuProvider>
            <AppBar position="sticky"> 
                <Toolbar sx={{ justifyContent: "space-between", backgroundColor: isDark ? "#1A3628" : "#2683b6" }}>
                    <LeftNavBar />

                    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
                        <SearchBar />
                    </Box>

                    <RightNavBar />
                </Toolbar>
            </AppBar>
        </MenuProvider>
    )
}

export default NavBar;
