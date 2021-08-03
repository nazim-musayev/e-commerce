import { makeStyles } from '@material-ui/core/styles'
import Button from "@material-ui/core/Button"
import SearchBar from './SearchBar'
import Grid from '@material-ui/core/Grid'
import { useDispatch } from 'react-redux'
import { displayLayout } from '../store/actions'

const useStyles = makeStyles((theme) => ({
    button : {
      textTransform: 'capitalize',
      color : "blue",
    }
  }))

const SearchPage = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleClick = () => {
    dispatch(displayLayout())
  }

    return (
      <>
      
        <Grid container justifyContent="space-between" alignItems="center"> 

          <Grid item xs={9}>
            <SearchBar className={classes.searchBar}/>
          </Grid>
          
          <Grid item xs={3}>
            <Button className={classes.button} onClick={handleClick} > 
              Geri Qayıt 
            </Button>
          </Grid>
          
        </Grid> 
     
      </>
    )
}

export default SearchPage
