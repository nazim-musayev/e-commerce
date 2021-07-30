import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    typography : {
        background : "#ff8a80",
        color : "white",
        padding : theme.spacing(2)
    }
  }))

const CallUs = () => {
    const classes = useStyles()
    return (
        <>
            <Typography variant="body1" align="center" className={classes.typography}>
               Sualınız var ? Zəng edin 999 99 99
            </Typography>
        </>
    )
}

export default CallUs
