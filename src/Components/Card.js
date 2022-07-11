import { Box, Typography, Stack,Grid } from '@mui/material'
import { Link } from 'react-router-dom'

export const CardComp = (props) => {
    return (
        <>
        
        <Grid item xs={4} onClick={ props.selectedProduct} >
           <Link to='/product' style={{textDecoration:'none'}} >
            <Stack m='2%' backgroundColor='#f3f3f3'>
                <Box sx={{ display: 'flex', justifyContent: 'center', p:{ xs:'0%', md:'2%' } }}  height='350px'>
                    <img src={props.img} al=''
                        height='100%' width='100%' alt=''/>
                </Box>

                <Box > <Typography align='center' variant='h4' gutterBottom> {props.name} </Typography> </Box>

            </Stack>
        </Link>
        </Grid>
        
        </>
    )
}