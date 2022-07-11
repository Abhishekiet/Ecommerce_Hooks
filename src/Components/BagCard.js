import { Grid , Stack , Typography} from '@mui/material'


export const BagCard=(props)=>{
    return(
        <>
         <Grid item xs={7} backgroundColor='#f3f3f3' m='1%'>
            <Stack direction='row' p={2} boxShadow={3}>
                
                <Stack width='45%'>
                    <img src={props.img} width='90%' height='95%' />
                </Stack>

                <Stack>
                    <Typography variant='h4' align='center' gutterBottom> {props.name} </Typography>
                    <Typography variant='h6'gutterBottom > {props.des} </Typography>
                    <Typography variant='h4' align='center' gutterBottom> {props.price} </Typography>
                </Stack>

            </Stack>
        </Grid>

        </>
    )
}