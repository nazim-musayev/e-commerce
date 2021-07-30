import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button'
import Meta from '../components/Meta'
import Link from "@material-ui/core/Link"
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../store/actions'

const ShoppingCart = () => {
   const products = useSelector(state => state.myProducts.products)
   const cartItems = useSelector(state => state.cart.items)
   const dispatch = useDispatch()

   // const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

   // console.log(totalPrice)

   // const countedItems = cartItems.reduce((allItems, item) => {
   //    if(item.title in allItems) {
   //       allItems[item.title]++
   //    }else {
   //       allItems[item.title] = 1
   //    }
   //    return allItems
   // }, {})

   // console.log([...new Set(cartItems)])

   console.log(cartItems)

   return (
        <>
            <Meta title="Səbət" />

            <Typography variant="h5" align="center" paragraph >
               səbət
            </Typography>

            {cartItems.length === 0 ? (
             <>
                <Typography variant="body2" align="center" paragraph >
                   Hal hazırda səbətiniz boşdur.
                </Typography>
 
                <Typography variant="body2" align="center" paragraph display="block">
 
                   Elə indi alışverişə  
 
                <Link href="/" style={{marginLeft : "6px", color : "blue", textDecoration : "underline"}}> 
                   başla 
                </Link>
 
                </Typography>
             </>

            ) : (

               cartItems.map(item => (
                  <div key={item.id}>
                  <div> {item.title}</div>
                  <Button onClick={() => dispatch(removeFromCart(cartItems, item))}> remove </Button> 
                  </div>
               ))
               
            ) }
               
              
               
              
           

            

            

        </>
    )
}

export default ShoppingCart