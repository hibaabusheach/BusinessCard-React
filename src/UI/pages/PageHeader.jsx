import {string} from 'prop-types';
import {Box, Divider, Typography} from '@mui/material';
import { useTheme } from '../providers/ThemeProvider';

const PageHeader = ({ title, subtitle }) => {
    const { isDark } = useTheme()
    return (
        <Box pt={2} mr={3}>
            <Typography variant='h2' component="h1" color={isDark ? "white" : "black"}>{title}</Typography>
            <Typography variant='h5' component="h2" color={isDark ? "white" : "black"}>{subtitle}</Typography>
            <Divider sx={{ my: 2 }}></Divider>
        </Box>
    );
}

PageHeader.propTypes = {
    title: string.isRequired,
    subtitle: string.isRequired,
}
export default PageHeader;