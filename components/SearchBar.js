import { makeStyles } from '@material-ui/core/styles'
import IconButton from "@material-ui/core/IconButton"
import InputBase  from "@material-ui/core/InputBase"
import SearchIcon from '@material-ui/icons/Search'
import { useDispatch } from 'react-redux'
import { displaySearchPage } from '../store/actions'

const useStyles = makeStyles((theme) => ({
    search : {
      display : "flex",
      alignItems : "center",
      position : "relative",
      padding: '2px 4px',
      margin : '15px 10px',
      background : "#EBEBEB",
      borderRadius : 25
    },
    icon : {
      marginRight : theme.spacing(2)
    }
  }))

const SearchBar = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  
  const handleClick = () => {
    dispatch(displaySearchPage())
  }
  
    return (
        <div className={classes.search} onClick={handleClick} >

          <IconButton className={classes.icon}>
            <SearchIcon />
          </IconButton>

          <InputBase placeholder="Axtar" fullWidth />

        </div>
    )
}

export default SearchBar
