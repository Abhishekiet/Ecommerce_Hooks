import { Box, Typography, Button } from '@mui/material'
import {Link} from 'react-router-dom'

export const Hero = (props) => {
    return (
        <>
            <Box style={{ display: 'flex', justifyContent: 'center' }} mt={4} >

                <Box sx={{ width: '80%', display:'flex', direction:'row' }} backgroundColor='#f3f3f3' p={3}  >

                    <Box sx={{ padding:'5% 5%' }} width='30%'>
                        <Typography variant='h2' display='inline'> Listen  </Typography>
                        <Typography variant='h4' display='inline'> everything  </Typography> <br />
                        <Typography variant='h4' display='inline'> with  </Typography>
                        <Typography variant='h2' display='inline' gutterBottom> Clearity  </Typography> <br />
                        
                        <Box sx={{ marginTop:'10%' }} >
                            <Typography variant='body'  > Buying earphone should leave you happy and good-looking, with money in your pocket. Earphone, Speaker, and contacts—we’ve got your ear covered. </Typography> <br/>
                            <Link to='/shop' style={{textDecoration:'none'}}>
                            <Button sx={{ backgroundColor:'black' , color:'white' , marginTop:'10%' ,padding:'4%' }} size='large' >
                                 Shop Now 
                            </Button>
                            </Link>
                        </Box>

                    </Box>

                    <img src={props.image} style={{ position:'absolute' , left:'40%' , height:'60%', width:'50%' }} alt='' />


                </Box>

            </Box>
        </>
    )
}




/*
import { Box, Typography } from '@mui/material'

export const Hero = () => {
    return (
        <>
            <Box style={{ display: 'flex', justifyContent: 'center' }} mt={4}>
                <Box sx={{ width: '80vw', height: '70vh' }} backgroundColor='#f3f3f3' >
                    <Box sx={{ display:'flex', justifyContent:'right' }} p={2}>
                        <img src=''
                            style={{ height: '65vh'}} />
                    </Box>
                    

                </Box>
            </Box>
        </>
    )
}
*/