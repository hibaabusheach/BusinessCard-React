import Typography from '@mui/material/Typography'
import NavBarLink from '../../../../components/routes/NavBarLink';
import ROUTES from '../../../../components/routes/routesModel';

const Logo = () => {
    return (
        <NavBarLink to={ROUTES.CARDS}>
            <Typography
                variant="h4"
                sx={{ display: { xs: "none", md: "inline-flex" },
                    marginRight: 2, fontFamily: "fantasy", color: "white"}}
                >
                BCard
            </Typography>
        </NavBarLink>
    )
}

export default Logo;