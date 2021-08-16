import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Divider from '@material-ui/core/Divider'
import Skeleton from '@material-ui/lab/Skeleton'
import { MdAddShoppingCart, MdFavorite } from 'react-icons/md'
import { getProducts, addToWishlist, removeFromWishlist, addToCart } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 310,
    maxHeight : 330,
    [theme.breakpoints.up('sm')]: {
      maxHeight : 340
    },
    marginBottom : theme.spacing(4),
    position : "relative",
    "&:hover" : {
      transition: "all 0.2s ease-out",
      boxShadow : " 0px 4px 8px rgba(38, 38, 38, 0.2)",
      bottom : "10px",
      border: "1px solid #cccccc"
    }
  },
  media: {
    margin : theme.spacing(6)
  },
  icons : {
    display : "flex"
  },
  iconColor :  {
    color : "#FD1D1D"
  }
}))

const ShoppingCard = () => {
  const isLoading = useSelector(state => state.products.isLoading)
  const products  = useSelector(state => state.products.items)
  const cartItems = useSelector(state => state.cart.items)
  const wishlist = useSelector(state => state.wishlist.items)
  const dispatch = useDispatch()
  const classes = useStyles() 

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])


  return (
    <> 
      {products.map((product) => {
        const alreadyInList = wishlist.find(item => item.id === product.id)
        return (
        <Grid item container justifyContent="center" xs={12} sm={6} md={4} key={product.id}>
          <Card className={classes.card} raised>

            {isLoading ? (<Skeleton variant="rect" width={400} height={250} />) : (
              <CardMedia className={classes.media}>
                <NextLink href={`/${product.category}/${product.id}`} passHref>
                  <Link>
                  <Image src={product.image} width={400} height={250} alt="Card Image" layout="responsive" />
                  </Link>
                </NextLink>   
              </CardMedia>
            )}
           
            <Divider />
      
            <CardContent>
             <Grid container alignItems="center">
                
              <Grid item xs={12}>
                {isLoading ? (<Skeleton variant="text" />) : (
                  <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                    {product.title.slice(0,22)}
                  </Typography>
                )}
                
              </Grid>

              <Grid item xs={8} sm={7}>
                {isLoading ? (<Skeleton variant="text" />) : (
                  <Typography variant="h6" color="error" >
                    $ {product.price}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={4} sm={5} className={classes.icons}>
                {isLoading ? (<Skeleton variant="circle" width={50} height={50} />) : (
                  <IconButton onClick={() => dispatch(alreadyInList ? removeFromWishlist(wishlist, product) 
                    : (addToWishlist(wishlist, product)))} className={alreadyInList && classes.iconColor} >
                       <MdFavorite />
                  </IconButton>
                )}

                {isLoading ? (<Skeleton variant="circle" width={50} height={50}/>) : (
                  <IconButton onClick={() => dispatch(addToCart(cartItems, product))}>
                    <MdAddShoppingCart />
                  </IconButton>
                )}
                
              </Grid>
             
             </Grid>
            </CardContent>

          </Card>
        </Grid>
      )})}
            
    </>
  );
}

export default ShoppingCard
