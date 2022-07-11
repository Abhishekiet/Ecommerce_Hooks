import { BagCard } from './BagCard' ;
import { Grid , Typography} from '@mui/material'

export const Bag=( props )=>{ 
    const show = props.bag.map( a=> < BagCard id={a.id} name={a.name} des={a.des} price={a.price} key={a.id} img={a.img}/> )
    return(
        <>
        
        <Typography variant='h2' align='center' mt='2%' > Your Cart </Typography> <br/>
        
         <Grid container justifyContent='center'>
            
            { show }

        </Grid>

        </>
    )
}