import { AiOutlineShoppingCart, AiOutlineHome } from 'react-icons/ai'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import { BsPerson } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import CallUs from './CallUs'
import { useSelector, useDispatch } from 'react-redux'
import netlifyIdentity from 'netlify-identity-widget'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { login, logout } from '../store/actions'
import SearchBar from './SearchBar'
import SearchPortal from './SearchPortal'


const Navbar = () => {
  const counter = useSelector(state => state.cart.counter)
  const wishlistCounter = useSelector(state => state.wishlist.counter)
  const [invisible, setInvisible] = useState(true)
  const dispatch = useDispatch()


  useEffect(() => {
    netlifyIdentity.init()
    return () => {
      netlifyIdentity.off('login')
    }
  },[])

  const handleClick = () => {
    netlifyIdentity.open()
    netlifyIdentity.on('login', (user) => {
      dispatch(login(user))
      setInvisible(false)
    })
    netlifyIdentity.on('logout', (user) => {
      dispatch(logout(user))
      netlifyIdentity.close()
      setInvisible(true)
    })
 }

    return (
      <>

        <CallUs />

        <Box display="flex" position="sticky" top={0} p={2} zIndex={1} bgcolor="secondary.main" >

          <Box clone display={{ xs : "block", md : "none" }}> 
            <Grid item xs={1}>
            <NextLink href="/" passHref>   
             <Link>        
              <IconButton color="primary">
                <AiOutlineHome  /> 
              </IconButton>
             </Link>
            </NextLink>
            </Grid>
          </Box>

          <Box clone display={{ xs : "none", md : "block"}} fontSize="h5.fontSize" p={1} ml={5}>
            <Grid item md={4}>
              <Typography color="primary" variant="h5">
                <Box letterSpacing={4}>
                <NextLink href="/">
                  FAKE STORE
                </NextLink>
                </Box>
              </Typography>
            </Grid>
          </Box>

          <Box clone display={{ xs : "block", md : "none"}}>
            <Grid item xs={4} ></Grid>
          </Box>

          <Box>
          <Grid item xs={1}>
            <NextLink href="/wishlist" passHref>
            <Link>      
              <IconButton color="primary">
                <Badge color="error" badgeContent={wishlistCounter} >
                  <FiHeart />
                </Badge>
              </IconButton>
              </Link>
            </NextLink>
          </Grid>
          </Box>

          <Box>
          <Grid item xs={1}>
            <NextLink href="/cart" passHref> 
            <Link>     
              <IconButton color="primary">
                <Badge color="error" badgeContent={counter} showZero>
                  <AiOutlineShoppingCart />
                </Badge>
              </IconButton>
              </Link>
            </NextLink>
          </Grid>
          </Box>

          <Box clone display={{xs : "none", md : "block"}}>
            <Grid item md={1}></Grid>
          </Box>

          <Box clone display={{xs : "none", md : "block"}} position="relative" flexGrow={1}>
            <Grid item md={4}>
              <SearchBar />
              <SearchPortal />
            </Grid>
          </Box>

          <Box clone display={{ xs : "block", md : "none"}}>
            <Grid item xs={5}></Grid>
          </Box>
          
          <Box clone >
          <Grid item xs={1} container justifyContent="flex-end">           
            <IconButton color="primary" onClick={handleClick}>
              <Badge color="error" variant="dot" invisible={invisible}>
                <BsPerson />
              </Badge>
            </IconButton>
          </Grid>
          </Box>
        
        </Box>      
      </>
    )
}

export default Navbar