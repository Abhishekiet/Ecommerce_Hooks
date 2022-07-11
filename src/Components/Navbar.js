import { Stack, TextField } from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'
import Logo from './Logo.png'

export const Navbar = () => {
    return (
        <>
            <Stack direction='row' justifyContent='space-around' boxShadow={3} p={2} alignItems='center' >

                <Stack direction='row' gap={{ sx:'0%', md:'14%' }} sx={{ marginLeft:{ xs:'0%' , md:'-6%' , lg:'-6%'   } }}>
                    <img src={Logo} alt='' height='40px' width='40px' style={{ marginLeft: '0%' }} />
                    <Link to='/home' style={{ fontSize: '21px', fontWeight: '700', color: 'black', textDecoration:'none' }}> Home </Link>
                    <Link to='/shop' style={{ fontSize: '21px', fontWeight: '700', color: 'black', textDecoration:'none' }}> Shop </Link>
                    <Link to='/featured' style={{ fontSize: '21px', fontWeight: '700', color: 'black', textDecoration:'none' }}> Featured </Link>
                    <a href='https://62cbe1492236f168e4557adc--strong-fox-3a5cd2.netlify.app/' style={{ fontSize: '21px', fontWeight: '700', color: 'black', textDecoration:'none' }}> Music </a>
                </Stack>

                <Stack direction='row' justifyContent='space-around' width='30%' >
                    <TextField variant='standard' />
                    <SearchIcon />
                    <Link to='/bag'  style={{color:'black'}}> <ShoppingBagIcon  /> </Link>
                    <a href='https://console.firebase.google.com/project/reactproject-fc290/firestore/data/~2FHeadphone~2F42UuAH2UYSls97jMcAKn'
                      style={{color:'black'}}>
                    <PersonIcon  /> 
                    </a>
                </Stack>

            </Stack>
        </>
    )
}


/*
<Stack boxShadow={3} p={2} direction='row' gap='4%' alignItems='center' >
                <img src={Logo} alt='' height='40px' width='40px' style={{marginLeft:'4%'}} />
                
                <Link to='/Home' style={{ fontSize:'21px',fontWeight:'700' ,color:'black'}}> Home </Link>
                <Link to='/Shop' style={{ fontSize:'21px',fontWeight:'700' ,color:'black' }}> Shop </Link>
                <Link to='/Speaker' style={{ fontSize:'21px',fontWeight:'700' ,color:'black' }}> Speaker </Link>
                <Link to='/Headphone' style={{ fontSize:'21px',fontWeight:'700' ,color:'black' }}> Headphone </Link>
                
                <TextField variant='standard' sx={{ marginLeft:{ lg:'15%' , xs:'3%' ,sm:'1%' } }} />
                <SearchIcon sx={{marginLeft:'-3%'}} />
                <ShoppingBagIcon />
            
            </Stack>
*/