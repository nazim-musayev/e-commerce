import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import { useSelector, useDispatch } from 'react-redux'
import { displayLayout } from '../store/actions'
import Image from 'next/image'
import NextLink from 'next/link'

const useStyles = makeStyles(theme => ({
  root : {
    background : "black",
    width : "calc(100vw - 10px)",
    height : "100vh",
    [theme.breakpoints.up('md')]: {
      width : "43vw",
      borderRadius : theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      width : "30vw"
    },
  }
}))

const SearchTable = () => {
  const { searchedProducts } = useSelector(state => state.search)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleClick = () => {
    dispatch(displayLayout())
  }

    return (
      <div>
        {searchedProducts.length > 0 && (
         <TableContainer className={classes.root}>
            <Table>
            <TableBody >
             {searchedProducts.map(product => (

               <TableRow key={product.id} onClick={handleClick}>
                <NextLink href={`/${product.category}/${product.id}`} passHref>
                 <TableCell>
                   <Link>
                   <Image src={product.image} alt={product.title} width={100} height={100} layout="fixed" />
                   </Link>
                 </TableCell>
                </NextLink>

                 <TableCell align="left">
                   <Typography color="primary">
                     {product.title}
                   </Typography>
                 </TableCell>
               </TableRow>
               
             ))}
            </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    )
}

export default SearchTable
