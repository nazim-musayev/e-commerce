import { makeStyles } from '@material-ui/core/styles'
import SearchTable from './SearchTable'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    position : "absolute",
    marginTop : theme.spacing(3),
  }
}))

const SearchPortal = () => {
  const { searchWord } = useSelector(state => state.search)
  const classes = useStyles()
 
  return (
    <div className={classes.root}>
      {searchWord && <SearchTable /> }
    </div>
  )
}

export default SearchPortal
