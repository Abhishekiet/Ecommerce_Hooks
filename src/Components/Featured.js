import { Grid , Typography } from '@mui/material'
import {CardComp} from './Card'
import {Hero} from './Hero'

export const Featured=(props)=>{
    return(
        <>
        <Hero image='https://www.sheeko.in/media/115929186_606049840114930_4508536148495986798_n.jpg' />
        
        <Typography sx={{ marginLeft: '10%', marginTop: '3%' }} variant='h2' > Earphone </Typography>
        <Grid container sx={{ p:'2% 9%' }}>
                {
                    props.arrayEarphone.slice(0,3).map( a=><CardComp name={a.name}  selectedProduct={ ()=> props.selectedProduct(a.id) } id={ a.id } des={a.des} key={a.id} img={a.img}/> )
                }
            </Grid>



        <Typography sx={{ marginLeft: '10%', marginTop: '3%' }} variant='h2' > Speaker </Typography>
        <Grid container sx={{ p:'2% 9%' }}>
                {
                    props.arraySpeaker.slice(0,3).map( a=><CardComp name={a.name} selectedProduct={ ()=> props.selectedProduct(a.id) } id={ a.id } des={a.des} key={a.id} img={a.img} /> )
                }
            </Grid>
        </>
    )
}