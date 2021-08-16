import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Link from "@material-ui/core/Link"
import Card from "@material-ui/core/Card"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Box from "@material-ui/core/Box"
import Fab from '@material-ui/core/Fab'
import { useSelector, useDispatch } from 'react-redux'
import { changeQuantity, removeFromCart, setSnackBar } from '../store/actions'
import Meta from '../components/Meta'
import NextLink from 'next/link'
import Image from 'next/image'

const ShoppingCart = () => {
  const products = useSelector(state => state.products.items)
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  
  const handleClick = () => {
    dispatch(setSnackBar(true, "error", "This page does not exist"))
  }

  const menuItems = products.slice(0,10).map(item => item.id)
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const subtotal = cartItems.reduce((total, item) => total + item.quantity, 0)
  return (
    <>
      <Meta title="Shopping Cart" /> 

      {cartItems.length !== 0 && (
        <Box my={3}>
          <Typography variant="h5" align="center" paragraph >
            Shopping Cart
          </Typography>
        </Box>     
      )}

      {cartItems.length === 0 ? (
        <Box my={20}>
            
          <Typography variant="h5" align="center" paragraph >
            Shopping Cart
          </Typography>

          <Typography variant="body2" align="center" paragraph>
            Your cart is empty
          </Typography>

          <NextLink href="/" passHref>
            <Typography align="center" paragraph>
              <Link style={{ color : "blue"}} underline="always" component="button">GO SHOPPING</Link>
            </Typography>
          </NextLink>
            
        </Box>

        ) : (
        <Grid container spacing={2}>
          <Grid item md={9} xs={12} >
          <TableContainer>
            <Table>

              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>

                    <TableCell>
                      <NextLink href={`${item.category}/${item.id}`} passHref>
                        <Link>
                         <Image src={item.image} alt={item.title} width={50} height={50} />
                        </Link>
                      </NextLink>
                     </TableCell>
   
                     <TableCell>
                        <Typography color="secondary">
                          <NextLink href={`${item.category}/${item.id}`}>
                           {item.title.slice(0, 20)}
                          </NextLink>
                        </Typography>
                     </TableCell>

                     <TableCell align="right">
                       <Select value={item.quantity} 
                        onChange={(e) => dispatch(changeQuantity(cartItems, item, e.target.value))}>

                          {menuItems.map(item => (
                            <MenuItem key={item} value={item}>
                              {item}
                            </MenuItem>
                          ))}

                       </Select>
                     </TableCell>

                     <TableCell align="right">${item.price}</TableCell>

                     <TableCell align="right">
                        <Fab color="secondary" size="small" onClick={() =>dispatch(removeFromCart(cartItems, item))}>
                         x
                        </Fab>
                     </TableCell>

                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </TableContainer>
         </Grid>

         <Grid item md={3} xs={12}>
            <Card style={{marginBottom : "15px"}}>
              <List>

                <ListItem>
                  <Typography >
                    Subtotal ( {`${subtotal} items`} ) : $ {totalPrice.toFixed(2)}
                  </Typography>
                </ListItem>

                <ListItem>
                  <Button variant="contained" fullWidth style={{background : "#ff8a80"}} 
                   onClick={handleClick} >
                    Check Out
                  </Button>
                </ListItem>
                
              </List>
            </Card>
          </Grid>
        </Grid>  
                    
       ) }
               
    </>
    )
}

export default ShoppingCart