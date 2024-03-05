import { useEffect } from "react";
import useUsers from "../hooks/useUsers"
import { Divider, Paper, Box, Typography } from "@mui/material";
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

import { useTheme } from "../../../providers/ThemeProvider";

const UserProfilePage = () => {
    const { user, handleGetUser } = useUsers()
    const { isDark } = useTheme()
    useEffect(() => {
        handleGetUser(user?._id);
    }, [handleGetUser, user?._id]);

    const employeeRole = user?.isAdmin ? "Admin" : user?.isBusiness ? "Business User" : user ? "User" : "Unknown";

    return (
        <Box minHeight={100} sx={{ padding: { xs: 1, sm: 4, md: 6}}}  >
            <Box display="flex" alignItems='center' justifyContent='center' color='white'
                sx={{ borderRadius: '8px', margin: '16px 0 16px', p: 2, width: '200px', background: isDark ? '#1A3628' : '#2683b6' }}> 
                <PermIdentityRoundedIcon sx={{ marginRight: '10px' }} /> 
                <Typography variant="h6" sx={{ fontSize: '18px', }}>Profile</Typography>
            </Box>

            <Paper sx={{width: '100%', background: isDark ? '#637c67' : '#e9cabb', padding: 2, borderRadius: '8px', display: 'flex', flexDirection:{ xs: 'column', sm: 'row'}, justifyContent: 'space-between' }} >
                <Box sx={{width: { xs: '100%', sm: '49%'},padding: 2, borderRadius: '8px', border: '2px solid', borderColor: isDark ? '#1A3628' : '#ee7e48'}}> 
                    <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>
                        About
                    </Typography>
                    <Divider  />

                    <Box padding={1} display='flex' alignItems='center' sx={{color: isDark ? 'black' : '#5f6974'}}>
                        <AlternateEmailIcon sx={{ marginRight: '10px' }} />
                        <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>{user?.email}</Typography>
                    </Box>
                    <Divider  />

                    <Box padding={1} display='flex' alignItems='center' sx={{color: isDark ? 'black' : '#5f6974'}}>
                        <AddIcCallIcon sx={{ marginRight: '10px' }} />
                        <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>{user?.phone}</Typography>
                    </Box>
                    <Divider  />

                    <Box padding={1} display='flex' alignItems='center' sx={{color: isDark ? 'black' : '#5f6974'}}>
                        <PlaceOutlinedIcon sx={{ marginRight: '10px' }} />
                        <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>{user?.address?.country}</Typography>
                    </Box>
                </Box>

                <Box sx={{width: { xs: '100%', sm: '49%'},mt: { xs:2, sm: 0},padding: 2,borderRadius: '8px',border: '2px solid', borderColor: isDark ? '#1A3628' : '#ee7e48'}}> 
                    <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>
                        Details
                    </Typography>
                    <Divider  />

                    <Box padding={1} display='flex' alignItems='center' sx={{color: isDark ? 'black' : '#5f6974'}}>
                        <PermIdentityRoundedIcon sx={{ marginRight: '10px' }} />
                        <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>
                            Full Name: {user?.name?.first} {user?.name?.last}
                        </Typography>
                    </Box>
                    <Divider  />

                    <Box padding={1} display='flex' alignItems='center' sx={{color: isDark ? 'black' : '#5f6974'}}>
                        <PlaceOutlinedIcon sx={{ marginRight: '10px' }} />
                        <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>Address:
                        { `${user?.address?.houseNumber}, ${user?.address?.street}, ${user?.address?.city}`}
                        </Typography>
                    </Box>
                    <Divider  />

                    <Box padding={1} display='flex' alignItems='center' sx={{color: isDark ? 'black' : '#5f6974'}}>
                        <MarkunreadMailboxOutlinedIcon sx={{ marginRight: '10px' }} />
                        <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>Postal Code: {user?.address?.zip}</Typography>
                    </Box>
                    <Divider  />

                    <Box padding={1} display='flex' alignItems='center' sx={{color: isDark ? 'black' : '#5f6974'}}>
                        <BusinessCenterOutlinedIcon sx={{ marginRight: '10px' }} /> 
                        <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>Employee: {employeeRole}</Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default UserProfilePage
