import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { closeDialog } from '../store/actions';

const useStyles = makeStyles((theme) => ({
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
  }))

export default function HelpDialog() {
  const isDisplaying = useSelector(state => state.dialog.isDisplaying)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleClose = () => {
    dispatch(closeDialog())
  }

  return (
    <div>

      <Dialog open={isDisplaying} onClose={handleClose} >

        <DialogTitle className={classes.title}>
            Mesaj göndərildi !
        </DialogTitle>
       
        <DialogContent>
          <DialogContentText>
            Təşəkkür edirik. Sorğunuz ən qısa müddətdə araşdırılıb cavablandırılacaq !
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} className={classes.button}>
            Bağla
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}
