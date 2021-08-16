import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Meta from "../components/Meta"
import Image from 'next/image'
import NextLink from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishlist, clearWishlist, addToCart } from '../store/actions'


const useStyles = makeStyles(theme => ({
  title : {
    margin : theme.spacing(3)
  },
  remove : {
    marginRight : theme.spacing(1)
  }
}))

const Wishlist = () => {
    const wishlist = useSelector(state => state.wishlist.items)
    const cartItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    const classes = useStyles()

    const handleClear = () => {
      dispatch(clearWishlist())
    }

    return (
        <>
            <Meta title="Wishlist" />

            {wishlist.length !== 0 && (
              <Box my={3}>
                <Typography variant="h5" align="center" paragraph >
                  Wishlist
                </Typography>
              </Box>     
            )}
            <Box mb={4}>
            <Divider variant="middle" />
            </Box>

            {wishlist.length === 0 ? (
              <Box my={20}>
                <Typography variant="h5" align="center" paragraph >
                  Wishlist
                </Typography>
  
                <Typography variant="body2" align="center" paragraph>
                  Your wishlist is empty
                </Typography>
              </Box>
            ) : (
                <Grid container spacing={5} justifyContent="center">
                  {wishlist.length > 1 && (
                    <Grid container item xs={12} justifyContent="center">
                      <Button color="secondary" variant="contained" onClick={handleClear}>
                        Clear All
                      </Button>
                    </Grid>
                  )}

                  {wishlist.map(item => (
                    <Grid item xs={12} sm={6} md={4} key={item.id} spacing={2}>
                      <NextLink href={`${item.category}/${item.id}`} passHref>
                        <Link>
                          <Image src={item.image} alt={item.title} width={350} height={350} layout="responsive" />
                        </Link>
                      </NextLink>

                        <Typography variant="body2" align="center" className={classes.title}>
                          <NextLink href={`${item.category}/${item.id}`}>
                            {item.title.slice(0, 25)}
                          </NextLink>
                        </Typography>
                       

                        <Typography variant="body2" align="center" className={classes.title}>
                          ${item.price}
                        </Typography>

                        <Box clone display="flex" justifyContent="center" alignItems="center">
                        <Grid item container xs={12}>
                          <Button color="secondary" variant="contained" className={classes.remove}
                            onClick={() => dispatch(removeFromWishlist(wishlist, item))}>
                            Remove
                          </Button>
                        
                          <Button color="secondary" variant="contained" onClick={() => {
                            dispatch(addToCart(cartItems, item), dispatch(removeFromWishlist(wishlist, item)))
                          }}>
                            Add to Cart
                          </Button>
                        </Grid>
                        </Box>
                        
                      </Grid> 
                  ))}
                </Grid>
            )}
        </>
    )
}

export default Wishlist
