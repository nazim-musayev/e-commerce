import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { closeDialog, displayLayout } from '../store/actions'

const useStyles = makeStyles({
    title : {
        background : "rgb(255, 194, 160)"
    },
    button : {
        background : "rgb(255, 194, 160)",
        color : "black",
        "&:hover" : {
            background : "rgb(255, 194, 160)"
        }
    }
  })

const HelpDialog = () => {
  const { isDisplaying } = useSelector(state => state.dialog)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleClose = () => {
    dispatch(closeDialog())
    dispatch(displayLayout())
  }

  return (
    <div>

      <Dialog open={isDisplaying} onClose={handleClose} >

        <DialogTitle className={classes.title}>
            Your message is received !
        </DialogTitle>
       
        <DialogContent>
          <DialogContentText>
            Thanks for reaching out. Someone will get back to you soon.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} className={classes.button}>
            Close
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}

export default HelpDialog