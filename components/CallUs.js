import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    typography : {
        background : "rgb(255, 134, 130)",
        color : "white",
        padding : theme.spacing(1)
    }
  }))

const CallUs = () => {
    const classes = useStyles()
    return (
        <>
            <Typography variant="body1" align="center" className={classes.typography}>
               Need Help ? Call Us 999 99 99
            </Typography>
        </>
    )
}

export default CallUs
