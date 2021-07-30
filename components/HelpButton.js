import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import { MdHelpOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { displayHelpPage } from '../store/actions'

const useStyles = makeStyles((theme) => ({
    root : {
        position : "fixed",
        bottom : '3vh',
        right : "20vh",
        zIndex : 3,
    },
    button : {
        background : "#ff8a80",
        color : "black",
        padding : "12px",
        borderRadius : "50px",
        borderColor : 'white',
        "&:hover" : {
          background : "#ff8a80"
        }
    }
  }))


const Help = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleClick = () => {
    dispatch(displayHelpPage())
  }

    return (
        <div className={classes.root}>

            <IconButton className={classes.button} onClick={handleClick}>
              <MdHelpOutline />
            </IconButton>

        </div>
    )
}

export default Help
