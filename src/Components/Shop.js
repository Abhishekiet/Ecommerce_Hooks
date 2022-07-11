import { Grid, Typography } from '@mui/material'
import { CardComp } from './Card'

export const Shop=(props)=>{
    const showEarphone = props.arrayEarphone.map( a=> <CardComp name={a.name} selectedProduct={ ()=> props.selectedProduct(a.id) } id={ a.id } des={a.des} key={a.id} img={a.img}/>)
    const showSpeaker = props.arraySpeaker.map( a=> <CardComp name={a.name} selectedProduct={ ()=> props.selectedProduct(a.id) } id={ a.id } des={a.des} key={a.id} img={a.img}/>)
    return(
        <>

        <Typography variant='h3' gutterBottom sx={{ mt:'5%' , ml:'2%' }}> All Products </Typography>

        <Grid container>

            { showEarphone }
            { showSpeaker }
            
        </Grid>
        </>
    )
}