import { makeStyles } from '@material-ui/core/styles'
import InputBase  from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import { AiOutlineSearch } from "react-icons/ai"
import { MdCancel } from 'react-icons/md'
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid'
import { useSelector, useDispatch } from 'react-redux'
import { searchForProducts, clearInput, displayLayout } from '../store/actions'
import SearchTable from './SearchTable'

const useStyles = makeStyles({
  searchBar : {
    padding: '2px 4px',
    margin : '15px 10px',
    background : "#EBEBEB",
    borderRadius : 25
  },
  button : {
    textTransform: 'capitalize',
    color : "blue"
  }
  })

const SearchPage = () => {
  const { searchWord } = useSelector(state => state.search)
  const products = useSelector(state => state.products.items)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleChange = (e) => {
    dispatch(searchForProducts(products, e.target.value))
  }

  const handleClear = () => {
    dispatch(clearInput())
  }

  const handleCancel = () => {
    dispatch(displayLayout())
    dispatch(clearInput())
  }

    return (
      <Grid container alignItems="center" className="search">

        <Grid item container xs={9} className={classes.searchBar} alignItems="center">

          <Grid item xs={2}>
            <IconButton disabled edge="start">
              <AiOutlineSearch />
            </IconButton>
          </Grid>
 
          <Grid item xs={8}>
            <InputBase placeholder="Search" fullWidth value={searchWord} onChange={handleChange} />
          </Grid>
 
          <Grid item xs={2}>
            <IconButton edge="end" onClick={handleClear}>
               <MdCancel />
            </IconButton>
          </Grid>
         
        </Grid>
        
        <Grid item xs={2}>
          <Button className={classes.button} onClick={handleCancel} > 
            Cancel 
          </Button>
        </Grid>  

        {searchWord && <SearchTable /> }
        
      </Grid>
    )
}

export default SearchPage
