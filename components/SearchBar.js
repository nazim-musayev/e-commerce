import { makeStyles } from '@material-ui/core/styles'
import IconButton from "@material-ui/core/IconButton"
import InputBase  from "@material-ui/core/InputBase"
import { AiOutlineSearch } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import { searchForProducts, clearInput, displayLayout } from '../store/actions'
import { useSelector, useDispatch } from 'react-redux'


const useStyles = makeStyles((theme) => ({
  searchBar : {
    display : "flex",
    alignItems : "center",
    position : "relative",
    padding: '2px 4px',
    background : "#EBEBEB",
    borderRadius : 25
  },
  icon : {
    marginRight : theme.spacing(2)
  }
  }))

const SearchBar = () => {
  const { searchWord } = useSelector(state => state.search)
  const products = useSelector(state => state.products.items)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleClear = () => {
    dispatch(clearInput())
    dispatch(displayLayout())
  }
  
  const handleChange = (event) => {
    dispatch(searchForProducts(products, event.target.value))
  }

    return (
        <div className={classes.searchBar}>
          
          <IconButton className={classes.icon}>
            <AiOutlineSearch />
          </IconButton>

          <InputBase placeholder="Search" fullWidth
           value={searchWord} onChange={handleChange}/>


           {searchWord && (
             <IconButton edge="start" onClick={handleClear}>
                <MdCancel />
             </IconButton>
           )}           

        </div>
    )
}

export default SearchBar
