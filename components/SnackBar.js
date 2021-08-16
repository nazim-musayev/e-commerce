import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { setSnackBar } from "../store/actions";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const SnackBar = () => {
    const { open, type, message } = useSelector(state => state.snackbar)
    const dispatch = useDispatch()
    const classes = useStyles()

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    dispatch(setSnackBar(false, type, message))
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}
       anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>

        <Alert elevation={6} variant="filled" onClose={handleClose} severity={type}>
          {message}
        </Alert>

      </Snackbar>
    </div>
  );
};

export default SnackBar

