import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, addToWishlist } from '../store/actions'

const useStyles = makeStyles(theme => ({
    root : {
      margin : theme.spacing(3,0)
    },
    button : {
        background : "rgb(255, 134, 130)",
        "&:hover" : {
            background : "rgb(255, 70, 130)"
        }
    },
    title : {
        fontSize : "25px"
    },
    card : {
      marginBottom : "16px"  
    }
}))

const Product = ({product}) => {
  const wishlist = useSelector(state => state.wishlist.items)
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const classes = useStyles()
  
  const alreadyInList = wishlist.find(item => item.id === product.id)

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>

        <Grid item md={6} xs={12}>
          <Image src={product.image} alt={product.title} width={350} height={350} layout="responsive" />
        </Grid>

        <Grid item md={3} xs={12}>
          <List>

            <ListItem>
              <Typography className={classes.title} gutterBottom>
                {product.title}
              </Typography>
            </ListItem>

            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            
            <ListItem>
              <Typography> Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>

        <Grid item md={3} xs={12}>
          <Card className={classes.card}>
            <List>

              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>

              <ListItem>
                {alreadyInList ? (
                  <Button disabled fullWidth variant="contained">
                    Already In List
                  </Button>
                ) : (
                  <Button fullWidth variant="contained" color="secondary" className={classes.button} 
                   onClick={() => dispatch(addToWishlist(wishlist, product))}>
                   Add to wishlist
                  </Button>
                )}
                
              </ListItem>
            
              <ListItem>
                <Button fullWidth variant="contained" color="secondary" 
                onClick={() => dispatch(addToCart(cartItems, product))} className={classes.button}>
                  Add to cart
                </Button>
              </ListItem>

            </List>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Product