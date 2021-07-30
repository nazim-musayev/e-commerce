import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Meta from "../components/Meta"
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../store/actions'

const Wishlist = () => {
    return (
        <>
            <Meta title="Wishlist" />

            <Typography align="center" variant="h5" paragraph >
                wishlist
            </Typography>

            <Button color="secondary" variant="contained" style={{
                marginLeft : "37vw", marginBottom : "20px"
            }}>
                 LİSTİ Paylaş
            </Button>

            <Typography align="center" variant="body2" paragraph >
               Sizin wishlistiniz hal-hazırda boşdur.
            </Typography>

        </>
    )
}

export default Wishlist
