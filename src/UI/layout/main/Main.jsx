import { node } from "prop-types"
import { Box } from "@mui/material"
import { useTheme } from "../../providers/ThemeProvider";

const Main = ({ children }) => {
    const { isDark } = useTheme();
    return ( 
        <Box sx={{ minHeight: "100vh", backgroundColor: isDark ? "#47644C" : "#EDE0D4" }}>
            {children}
        </Box>
    )
}

Main.propTypes = {
    children: node.isRequired
}

export default Main