import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Link from "@material-ui/core/Link"
import Fab from '@material-ui/core/Fab'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, changeQuantity } from '../store/actions'
import Meta from '../components/Meta'
import NextLink from 'next/link'
import Image from 'next/image'
import axios from 'axios';
import { useRouter } from 'next/router';
import {
   Select,
   MenuItem,
   Card,
   List,
   ListItem,
 } from '@material-ui/core'

const ShoppingCart = () => {
   const cartItems = useSelector(state => state.cart.items)
   const dispatch = useDispatch()
   const router = useRouter()

   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
   const subtotal = cartItems.reduce((total, item) => total + item.quantity, 0)

   return (
        <>
            <Meta title="Shopping Cart" />

            <Typography variant="h5" align="center" paragraph >
               Shopping Cart
            </Typography>

            {cartItems.length === 0 ? (
             <>
                <Typography variant="body2" align="center" paragraph >
                   Your cart is empty.
                </Typography>
 
                
 
                   {/* Elə indi alışverişə  
 
                <Link href="/" style={{marginLeft : "6px", color : "blue", textDecoration : "underline"}}> 
                   başla 
                </Link> */}

<NextLink href="/" passHref style={{marginLeft : "6px", color : "black", textDecoration : "underline"}}>
            <Link>Go shopping</Link>
          </NextLink>
 
          
             
             </>

            ) : (
              <Grid container spacing={2}>
               <Grid item md={9} xs={12}>
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
                          
                             <Link>
                               <Image
                                 src={item.image}
                                 alt={item.title}
                                 width={50}
                                 height={50}
                               ></Image>
                             </Link>
                           
                         </TableCell>
   
                         <TableCell>
                          
                             <Link>
                               <Typography color="secondary">{item.title.slice(0, 12)}</Typography>
                             </Link>
                           
                         </TableCell>
                         <TableCell align="right">
                          <Typography style={{marginRight : "20px"}}>
                            {item.quantity}
                          </Typography>
                         </TableCell>
                         <TableCell align="right">${item.price}</TableCell>
                         <TableCell align="right">
                           <Fab color="secondary" size="small"
                             onClick={() => dispatch(removeFromCart(cartItems, item))}
                           >
                             x
                           </Fab>
                         </TableCell>
                       </TableRow>
                     ))}
                   </TableBody>
                 </Table>
               </TableContainer>
             </Grid>
             <Grid item md={3} xs={12} >
                    <Card style={{marginBottom : "15px"}}>
                      <List>
                        <ListItem>
                          <Typography >
                            Subtotal ( {`${subtotal} items`} ) : $ {totalPrice.toFixed(2)}
                          </Typography>
                        </ListItem>
                        <ListItem>
                          <Button
                            variant="contained"
                            fullWidth
                            style={{background : "#ff8a80"}}
                          >
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