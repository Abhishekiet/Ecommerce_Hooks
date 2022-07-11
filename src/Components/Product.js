import { Button, Grid , Stack, Typography,Box } from '@mui/material'
import { Footer } from './Footer'
import logo from './Logo.png'

export const Product=(props)=>{
    return(
        <>
        <Stack direction= 'row' p='4%'  justifyContent='center' >
            
            <Stack backgroundColor='#f3f3f3' sx={{ display:'flex' ,alignItems:'center' , justifyContent:'center'}} boxShadow={4}>
                <img src={props.product.img} height='80%' width='70%'  />
            </Stack>
            
            <Stack boxShadow={4} p='2%' minWidth='40%'>
                <Typography variant='h2' > {props.product.name} </Typography>
                <Typography variant='h4' sx={{mt:'5%'}}> {props.product.des}  </Typography>
                <Typography variant='h2' sx={{mt:'15%'}} align='center' > {props.product.price} </Typography>

                <Box sx={{ display:'flex', justifyContent:'center'  }} >
                    <Button sx={{ backgroundColor:'black' , color:'white' ,padding:'2%', width:'50%',mt:'6%' }}
                    onClick={props.addtocart}>
                     Add To Cart
                    </Button>
                </Box>
            </Stack>

        </Stack>
        </>
    )
}

