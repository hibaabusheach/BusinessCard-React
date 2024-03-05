import { func, object, string } from "prop-types";
import { makeFirstLetterCapital } from "../../../../core/utils/algoMethod";
import NavBarLink from  "../../../../components/routes/NavBarLink";
import MenuItem from "@mui/material/MenuItem";

const MenuLink = ({ text, navigateTo, onClick, styles }) => {
    return (
        <NavBarLink to={navigateTo}>
            <MenuItem onClick={onClick} sx={{ ...styles }}>
                { makeFirstLetterCapital(text) }
            </MenuItem>
        </NavBarLink>
    )
}

MenuLink.propTypes = {
    text: string.isRequired,
    navigateTo: string.isRequired,
    onClick: func.isRequired,
    styles: object,
}

MenuLink.defaultProps = {
    styles: {}
}

export default MenuLink
