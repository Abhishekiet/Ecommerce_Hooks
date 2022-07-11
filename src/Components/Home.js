import { Typography ,Grid } from '@mui/material'
import { Hero } from './Hero'
import { CardComp } from './Card'

export const Home = (props) => {
    return (
        <>

            <Hero image='https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI-3_25e4be39-aa68-4c07-94de-75afabaeef11_1000x.jpg?v=1655369215'/>

            <Typography sx={{ marginLeft: '10%', marginTop: '3%' }} variant='h2' > Headphone </Typography>

            <Grid container sx={{ p:'2% 9%' }}>
                {
                    props.arrayEarphone.slice(0,3).map( a=><CardComp name={a.name} selectedProduct={ ()=> props.selectedProduct(a.id) } id={ a.id } des={a.des} key={a.id} img={a.img} /> )
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
