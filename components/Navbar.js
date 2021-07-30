import { AiOutlineShoppingCart, AiOutlineHome } from 'react-icons/ai'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Grid from '@material-ui/core/Grid'
import { BsPerson } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { useRouter } from 'next/router'
import Link from 'next/link'
import TempDrawer from './TempDrawer'
import CallUs from './CallUs'
import { useSelector } from 'react-redux'


const useStyles = makeStyles((theme) => ({
    root : {
      display : "flex",
      background : "black",
      padding : theme.spacing(2),
      zIndex : 999,
      position : "sticky",
      top : 0,
    }
  }))

const Navbar = () => {
  const counter = useSelector(state => state.cart.counter)
  const wishlistCounter = useSelector(state => state.myProducts.wishlistCounter)
  const classes = useStyles();
  const router = useRouter()

    return (
      <>

        <CallUs />

        <Grid container className={classes.root} >

          <Grid item xs={1} container > 
            <Link href="/">           
            <IconButton color="primary">
              <AiOutlineHome  />
            </IconButton>
            </Link>
          </Grid>

          <Grid item xs={5}></Grid>

          <Grid item xs={1}>
            <Link href="/wishlist">      
            <IconButton color="primary">
            <Badge color="error" badgeContent={wishlistCounter} >
              <FiHeart />
            </Badge>
            </IconButton>
            </Link>
          </Grid>

          <Grid item xs={1}>
            <Link href="./cart">      
            <IconButton color="primary">
            <Badge color="error" badgeContent={counter} showZero>
              <AiOutlineShoppingCart />
            </Badge>
            </IconButton>
            </Link>
          </Grid>

          <Grid item xs={1}>
            <Link href="./login">         
            <IconButton color="primary">
            <Badge color="error" variant="dot">
              <BsPerson />
            </Badge>
            </IconButton>
            </Link>
          </Grid>

          <Grid item xs={2}></Grid>

          <Grid item xs={1} container justify="flex-end">            
            <TempDrawer />
          </Grid>

        </Grid>       
      </>
    )
}

export default Navbar