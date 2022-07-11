import { Stack, Box, Typography } from '@mui/material'
import logo from './Logo.png'

export const Footer = () => {
    return (
        <>
            <Stack direction='row'  backgroundColor='#f3f3f3' >

                <Box width='30%' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <Stack>
                        <Typography variant='h5' align='center'> Developed by </Typography> <br />
                        <Typography variant='h4' align='center'> Sachin Sharma </Typography>
                    </Stack>
                </Box>

                <Box width='45%' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={logo} width='40%' height='40%' alt=''/>
                </Box>

                <Box width='35%' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Stack>
                        <Typography variant='h4' aign='left' sx={{marginLeft:'-5%'}}> Technology Used </Typography>
                        <Typography variant='h5' aign='center'> Rect </Typography>
                        <Typography variant='h5' aign='center'> Material UI </Typography>
                        <Typography variant='h5' aign='center'> FireBase </Typography>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}