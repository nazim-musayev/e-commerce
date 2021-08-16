import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import { MdHelpOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { displayHelpPage, displayHelpPortal } from '../store/actions'

const useStyles = makeStyles((theme) => ({
    root : {
        zIndex : 3,
        position : "fixed",
        bottom : '1.5vh',
        right : "3vh",
        [theme.breakpoints.up('sm')]: {
          right: '2vh'
        }
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


const HelpButton = () => {
  const md = useMediaQuery('(min-width:800px)')
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleClick = () => {
    dispatch(md ? displayHelpPortal() : displayHelpPage())
  }

    return (
        <div className={classes.root}>
          
            <IconButton className={classes.button} onClick={handleClick}>
              <MdHelpOutline />
            </IconButton>
      
        </div>
    )
}

export default HelpButton
