import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import Divider from '@material-ui/core/Divider'
import { MdAddShoppingCart, MdFavorite } from 'react-icons/md'
import { addToWishlist, addToCart } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { selectOption, sortByPriceHighest, sortByPriceLowest } from '../store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 330,
    height : 300,
    marginBottom : theme.spacing(4)
  },
  media: {
    margin : theme.spacing(6)
    // height: 0,
    // paddingTop: '56.25%', // 16:9
  },
  // cardContent : {
  //   display : "flex"
  // },
  actions : {
    display : "flex",
    justifyContent : "flex-end",
  }
}));

export default function ShoppingCard() {
  const  products  = useSelector(state => state.myProducts.products)
  const  cartItems  = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const classes = useStyles() 

  return (
    <>
      {products.map(product => (
        <Grid item xs={6} md={4} key={product.id}>

          <Card className={classes.root} raised>

            <CardMedia className={classes.media} >
              <Image src={product.image} width={400} height={250} alt="Card Image" layout="responsive" />   
            </CardMedia>

            <Divider />

            <CardContent className={classes.cardContent}>
              
              <Grid container alignItems="center">
                <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom className={classes.title}>
                {product.title.slice(0,30)}
              </Typography>
              </Grid>

              <Grid item xs={6}>
              <Typography variant="h6" color="error" >
                $ {product.price}
              </Typography>
              </Grid>

              <Grid item xs={6}>
              <IconButton onClick={() => dispatch(addToWishlist(product))}>
                <MdFavorite />
              </IconButton>

              <IconButton onClick={() => dispatch(addToCart(cartItems, product))}>
                <MdAddShoppingCart />
              </IconButton>
              </Grid>
             
              </Grid>
            </CardContent>

            {/* <CardActions className={classes.actions}>
              <IconButton onClick={() => dispatch(addToWishlist(product))}>
                <MdFavorite />
              </IconButton>

              <IconButton onClick={() => dispatch(addToCart(product))}>
                <MdAddShoppingCart />
              </IconButton>
            </CardActions> */}

          </Card>
        </Grid>
       
      ))}
            
    </>
  );
}
